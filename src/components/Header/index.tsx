import React, { useState } from 'react';

import { Container, GithubLogo, SearchForm } from './styles';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    navigate(`/${search.toLowerCase().trim()}`);
  }

  return (
    <Container>
      <GithubLogo />
      <SearchForm onSubmit={handleSubmit}>
        <input
          placeholder="Enter username or repo..."
          value={search}
          onChange={event => setSearch(event.currentTarget.value)}
        />
      </SearchForm>
    </Container>
  );
}

export default Header;