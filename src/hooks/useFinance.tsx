import { useContext } from 'react';
import { FinanceContext } from '../contexts/Finance';
import { FinanceContextType } from '../contexts/Finance/types';

export const useFinance = () => {
  const financeContext = useContext(FinanceContext);
  return financeContext as FinanceContextType;
}
