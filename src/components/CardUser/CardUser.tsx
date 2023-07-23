import React, { Fragment, useEffect } from 'react';
import styled from 'styled-components';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs/';
import useSWRMutation from 'swr/mutation';
import { Spinner } from 'reactstrap';

import { CardUserProps } from './CardUser.types';
import CardRepository from '../CardRepository/CardRepository';
import { fetcher } from '../../services';

const StyledContainer = styled.button<CardUserProps>`
  width: 100%;
  height: 40px;
  padding: 5px 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #aab8c2;
  border-radius: 3px;
  margin: 10px 0px;
`;

const StyledText = styled.p<CardUserProps>`
  color: #000;
  font-size: 16px;
  font-weight: bold;
`;

const StyleRepositoryContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CardUser: React.FC<CardUserProps> = ({
  username,
  selectedUsername,
  onClick,
  ...props
}) => {
  const {
    data: repositories,
    trigger: searchRepositories,
    isMutating
  } = useSWRMutation(`users/${selectedUsername?.username}/repos`, fetcher);

  useEffect(() => {
    if (selectedUsername?.username != '' && selectedUsername?.isExpanded) {
      searchRepositories();
    }
  }, [selectedUsername]);

  const renderRepositories = () => {
    if (isMutating) {
      return username == selectedUsername?.username ? (
        <Spinner color='info' size='sm' />
      ) : null;
    } else {
      if (
        username == selectedUsername?.username &&
        selectedUsername?.isExpanded
      ) {
        return repositories && repositories.length > 0 ? (
          repositories.map((repo: any) => (
            <StyleRepositoryContainer>
              <CardRepository
                title={repo.name}
                description={repo.description}
                star={repo.watchers_count}
              />
            </StyleRepositoryContainer>
          ))
        ) : (
          <h3>{`There's no repositories for username: ${selectedUsername?.username}`}</h3>
        );
      }
    }
  };

  return (
    <Fragment>
      <StyledContainer
        type='button'
        username={username}
        selectedUsername={selectedUsername}
        onClick={onClick}
        {...props}
      >
        <StyledText username={username}>{username}</StyledText>
        {username == selectedUsername?.username &&
        selectedUsername?.isExpanded ? (
          <BsChevronUp size='20px' style={{ strokeWidth: 1 }} color='#000' />
        ) : (
          <BsChevronDown size='20px' style={{ strokeWidth: 1 }} color='#000' />
        )}
      </StyledContainer>
      {renderRepositories()}
    </Fragment>
  );
};

export default CardUser;
