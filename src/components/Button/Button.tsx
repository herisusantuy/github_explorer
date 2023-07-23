import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Spinner } from 'reactstrap';

import { ButtonProps } from './Button.types';

const StyledButton = styled.button<ButtonProps>`
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 3px;
  display: inline-block;
  padding: ${props =>
    props.size === 'small'
      ? '7px 25px 8px'
      : props.size === 'medium'
      ? '9px 30px 11px'
      : '14px 30px 16px'};
  color: #fff;
  background-color: ${props => (props.disabled ? '#657786' : '#1DB1F2')};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  &:hover {
    background-color: ${props => (props.disabled ? '#AAB8C2' : '#1DA1F2')};
    border-color: ${props => (props.disabled ? '#AAB8C2' : '#1DA1F2')};
  }
  &:focus {
    border-color: ${props => (props.disabled ? '#AAB8C2' : '#1DA1F2')};
  }
`;

const Button: React.FC<ButtonProps> = ({
  text,
  disabled,
  size,
  isLoading,
  onClick,
  ...props
}) => {
  return (
    <Fragment>
      <StyledButton
        type='button'
        disabled={disabled}
        size={size}
        onClick={onClick}
        {...props}
      >
        {isLoading ? (
          <Spinner color='info' size='sm' style={{ borderColor: '#fff' }}>
            Loading...
          </Spinner>
        ) : (
          text
        )}
      </StyledButton>
    </Fragment>
  );
};

export default Button;
