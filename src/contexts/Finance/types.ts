import { ReactNode } from 'react';

export interface FinanceContextProviderProps {
  children: ReactNode;
}

export interface Athlete {
  name: string
  surname: string
  club: string;
  number: string;
}

export type FinanceContextType = {
  athletes: Athlete[];
  addAthlete: (athlete: Athlete) => void;
  loadingInitial: boolean
  error: string
  setError: (value: string) => void
};