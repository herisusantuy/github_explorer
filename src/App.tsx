import { Fragment, useState } from 'react';
import useSWRMutation from 'swr/mutation';
import styled from 'styled-components';

import './App.css';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import CardUser from './components/CardUser/CardUser';
import { fetcher } from './services';

const StyledTopContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const StyledTextMessage = styled.p`
  text-align: left;
`;

export type selectedUsername = {
  isExpanded: boolean;
  username: string;
};

function App() {
  const [username, setUsername] = useState<string>('');
  const [selectedUsername, setSelectedUsername] = useState<selectedUsername>({
    isExpanded: false,
    username: ''
  });

  const {
    data: users,
    trigger: searchUsername,
    isMutating
  } = useSWRMutation(`search/users?q=${username}`, fetcher, {
    populateCache: true
  });
  const handleSearchUsername = async () => await searchUsername();
  const handleOnClick = (username: string) => {
    setSelectedUsername(prev => ({
      ...prev,
      isExpanded: prev.username == username ? !prev.isExpanded : true,
      username
    }));
  };

  const renderCardUser = () => {
    if (username != '') {
      return users?.items?.length > 0 ? (
        <>
          <StyledTextMessage>
            Showing users for{' '}
            <span style={{ fontWeight: 'bold' }}>{username}</span>
          </StyledTextMessage>
          {users?.items.map((item: any, i: number) => (
            <CardUser
              key={i}
              username={item?.login}
              selectedUsername={selectedUsername}
              onClick={() => handleOnClick(item.login)}
            />
          ))}
        </>
      ) : null;
    }
  };

  return (
    <Fragment>
      <h2>Github Explorer</h2>
      <StyledTopContainer>
        <Input
          placeholder='Enter username'
          onChange={e => setUsername(e.target.value)}
          value={username}
          onClear={() => setUsername('')}
        />
        <Button
          text='Search'
          size='large'
          disabled={username == ''}
          isLoading={isMutating}
          onClick={handleSearchUsername}
        />
      </StyledTopContainer>
      {renderCardUser()}
    </Fragment>
  );
}

export default App;
