/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, useState, useEffect, createContext } from "react";
import { Athlete, FinanceContextProviderProps, FinanceContextType } from "./types";

export const FinanceContext = createContext<FinanceContextType | undefined>(
  undefined
);

const FinanceContextProvider = ({ children }: FinanceContextProviderProps) => {
  const [error, setError] = useState<string>("");
  const [athletes, setAthletes] = useState<Athlete[]>([]);
  const [loadingInitial, setLoadingInitial] = useState<boolean>(true);

  useEffect(() => {
    setLoadingInitial(false);
  }, []);  

  const addAthlete = (athlete: Athlete) => {
    setAthletes([...athletes, athlete]);
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
