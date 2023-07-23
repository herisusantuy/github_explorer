import React from 'react';
import styled from 'styled-components';
import { CgClose } from 'react-icons/cg/';

import { InputProps } from './Input.types';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
  width: 100%;
  position: relative;
`;

const StyledInput = styled.input<InputProps>`
  height: 40px;
  border-radius: 3px;
  border: 3px solid #ccc;
  background-color: #fff;
  color: #000;
  padding-left: 10px;
  font-size: 14px;
  outline: none;
  position: relative;
  &:focus {
    border: 3px solid #1db1f2;
  }
`;

const StyledIcon = styled(CgClose)`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const Input: React.FC<InputProps> = ({
  onChange,
  onClear,
  placeholder,
  value,

  ...props
}) => {
  return (
    <StyledContainer>
      <StyledInput
        type='text'
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        {...props}
      />
      {value != '' ? (
        <StyledIcon size={25} onClick={onClear} color='#1db1f2' />
      ) : null}
    </StyledContainer>
  );
};

export default Input;
