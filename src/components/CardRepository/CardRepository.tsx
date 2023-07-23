import React from 'react';
import styled from 'styled-components';

import { AiFillStar } from 'react-icons/ai';

import { CardRepositoryProps } from './CardRepository.types';

const StyledContainer = styled.div<CardRepositoryProps>`
  width: 95%;
  background-color: #aab8c2;
  padding: 10px 10px;
  border-radius: 3px;
  margin: 10px 0px;
`;

const StyledTopContainer = styled.div<CardRepositoryProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0px;
  height: 30px;
`;

const StyledStarContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px;
  align-items: center;
`;

const StyledStarTotal = styled.h3`
  padding: 0px 5px;
`;

const StyledDescriptionTextarea = styled.p`
  text-align: justify;
`;

const CardRepository: React.FC<CardRepositoryProps> = ({
  title,
  description,
  star,
  ...props
}) => {
  return (
    <StyledContainer
      title={title}
      description={description}
      star={star}
      {...props}
    >
      <StyledTopContainer>
        <h3>{title}</h3>
        <StyledStarContainer>
          <StyledStarTotal>{star}</StyledStarTotal>
          <AiFillStar />
        </StyledStarContainer>
      </StyledTopContainer>
      <StyledDescriptionTextarea>{description}</StyledDescriptionTextarea>
    </StyledContainer>
  );
};

export default CardRepository;
