import { ReactNode } from 'react';
import { User } from 'firebase/auth';

export interface AuthContextProviderProps {
  children: ReactNode;
}

export type AuthContextType = {
  loggedUser: User | null;
  error: string;
  loadingInitial: boolean;
  setError: (value: string) => void;
  setLoggedUser: (user: User) => void;
  signinWithGoogle: () => void;
  logout: () => void;
};

export interface SignUpProps {
  email: string;
  password: string;
  username: string;
}