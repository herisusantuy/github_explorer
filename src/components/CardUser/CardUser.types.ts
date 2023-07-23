import { MouseEventHandler } from 'react';
import { selectedUsername } from '../../App';

export interface CardUserProps {
  username?: string;
  selectedUsername?: selectedUsername;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
