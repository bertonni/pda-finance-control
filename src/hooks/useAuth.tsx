import { useContext } from 'react';
import { AuthContext } from '../contexts/Auth';
import { AuthContextType } from '../contexts/Auth/types';

export const useAuth = () => {
  const authContext = useContext(AuthContext);
  return authContext as AuthContextType;
}
