import { MouseEventHandler } from 'react';

export interface ButtonProps {
  text?: string;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  isLoading?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
