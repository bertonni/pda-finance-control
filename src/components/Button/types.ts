import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  variant?: 'text' | 'filled' | 'outlined';
  color?: 'primary' | 'secondary' | 'tertiary' | 'error'
}