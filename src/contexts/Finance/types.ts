import { ReactNode } from 'react';

export interface FinanceContextProviderProps {
  children: ReactNode;
}

export interface Athlete {
  id: string;
  name: string
  club: string;
}

export interface AthleteFormData {
  name: string
  club: string;
}

export type FinanceContextType = {
  athletes: Athlete[];
  addAthlete: (athlete: AthleteFormData) => void;
  loadingInitial: boolean
  error: string
  setError: (value: string) => void
};