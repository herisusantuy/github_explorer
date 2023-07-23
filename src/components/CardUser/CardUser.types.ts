import { MouseEventHandler } from 'react';

export interface CardUserProps {
  username?: string;
  selectedUsername?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
