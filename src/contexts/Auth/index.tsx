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
  LoggedUser,
} from "./types";
import { auth, db, provider } from "../../utils/firebase";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

const localUser = localStorage.getItem("user");
let localUserDefault = {} as LoggedUser;
if (localUser) {
  const user = JSON.parse(localUser) as LoggedUser;
  localUserDefault = user;
}

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [loggedUser, setLoggedUser] = useState<LoggedUser | null>(null);
  const [error, setError] = useState<string>("");
  const [loadingInitial, setLoadingInitial] = useState<boolean>(true);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        if (localUserDefault.uid) {
          setLoggedUser(localUserDefault);
        } else {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);
  
          if (docSnap.exists()) {
            setLoggedUser(docSnap.data() as LoggedUser);
          }
        }
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
      } else {
        // User is signed out
        logout();
      }
      setLoadingInitial(false);
    });
  }, []);

  const insertUser = async (user: User) => {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setLoggedUser(docSnap.data() as LoggedUser)
      localStorage.setItem("user", JSON.stringify(docSnap.data()));
      return;
    } else {
      const newUser: LoggedUser = {
        name: user.displayName,
        email: user.email,
        uid: user.uid,
        isAdmin: false,
        photoURL: user.photoURL
      }
      await setDoc(doc(db, "users", user.uid), newUser);
      localStorage.setItem("user", JSON.stringify(newUser));
      const newFinance = {
        athlete: user.uid,
        jan_2024: 'Pendente',
        fev_2024: 'Pendente',
        mar_2024: 'Pendente',
        abr_2024: 'Pendente',
        mai_2024: 'Pendente',
        jun_2024: 'Pendente',
        jul_2024: 'Pendente',
        ago_2024: 'Pendente',
        set_2024: 'Pendente',
        out_2024: 'Pendente',
        nov_2024: 'Pendente',
        dez_2024: 'Pendente',
      }
      await addDoc(collection(db, "finances"), newFinance);
      setLoggedUser(newUser);
    }
  }

  const signinWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.

        // The signed-in user info.
        const user = result.user;
        insertUser(user);
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
