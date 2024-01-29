import { ReactNode } from 'react';

export interface AuthContextProviderProps {
  children: ReactNode;
}

export interface LoggedUser {
  uid: string;
  name: string | null;
  email: string | null;
  photoURL: string | null;
  isAdmin: boolean;
}

export type AuthContextType = {
  loggedUser: LoggedUser | null;
  error: string;
  loadingInitial: boolean;
  setError: (value: string) => void;
  setLoggedUser: (user: LoggedUser) => void;
  signinWithGoogle: () => void;
  logout: () => void;
};

export interface SignUpProps {
  email: string;
  password: string;
  username: string;
}