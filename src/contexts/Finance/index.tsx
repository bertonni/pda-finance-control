/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, useState, useEffect, createContext } from "react";
import {
  Athlete,
  AthleteFormData,
  FinanceContextProviderProps,
  FinanceContextType,
} from "./types";
import { addDoc, collection, getDocs, onSnapshot, query } from "firebase/firestore";
import { db } from "../../utils/firebase";

export const FinanceContext = createContext<FinanceContextType | undefined>(
  undefined
);

const FinanceContextProvider = ({ children }: FinanceContextProviderProps) => {
  const [error, setError] = useState<string>("");
  const [athletes, setAthletes] = useState<Athlete[]>([]);
  const [loadingInitial, setLoadingInitial] = useState<boolean>(true);

  // useEffect(() => {
  //   const q = query(collection(db, "athletes"));
  //   const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //     const data: Athlete[] = [];
  //     querySnapshot.forEach((doc) => {
  //       const athlete: Athlete = {
  //         id: doc.id,
  //         ...doc.data() as AthleteFormData
  //       }
  //       data.push(athlete);
  //     });
  //     setAthletes(data);
  //   });
  //   setLoadingInitial(false);
  //   return () => unsubscribe();

  // }, []);

  const addAthlete = async (athlete: AthleteFormData) => {
    await addDoc(collection(db, "athletes"), athlete);
  };

  const memoedValues = useMemo(
    () => ({
      error,
      athletes,
      loadingInitial,
      setError,
      addAthlete,
    }),
    [error, athletes]
  );

  return (
    <FinanceContext.Provider value={memoedValues}>
      {!loadingInitial && children}
    </FinanceContext.Provider>
  );
};

export default FinanceContextProvider;
