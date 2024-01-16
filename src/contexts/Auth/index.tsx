/* eslint-disable react-hooks/exhaustive-deps */
import {
  User,
  signOut,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { useMemo, useState, useEffect, createContext } from "react";
import {
  AuthContextProviderProps,
  AuthContextType,
} from "./types";
import { auth, db, provider } from "../../utils/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [loggedUser, setLoggedUser] = useState<User | null>(null);
  const [error, setError] = useState<string>("");
  const [loadingInitial, setLoadingInitial] = useState<boolean>(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedUser(user);
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
      } else {
        // User is signed out
        logout();
      }
      setLoadingInitial(false);
    });
  }, [loggedUser]);

  const insertUser = async (user: User) => {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log('user already exists');
      return;
    } else {
      const newUser = {
        name: user.displayName,
        email: user.email,
        uid: user.uid,
        photoURL: user.photoURL
      }
      await setDoc(doc(db, "users", user.uid), newUser);
    }
  }

  const signinWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.

        // The signed-in user info.
        const user = result.user;
        insertUser(result.user);
        setLoggedUser(user);
      })
      .catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setLoggedUser(null);
      })
      .catch((error) => {
        // An error happened
        console.log(error);
      });
  };

  const memoedValues = useMemo(
    () => ({
      error,
      loggedUser,
      loadingInitial,
      logout,
      setError,
      setLoggedUser,
      signinWithGoogle,
    }),
    [loggedUser, error]
  );
  
  return (
    <AuthContext.Provider value={memoedValues}>
      {!loadingInitial && children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
