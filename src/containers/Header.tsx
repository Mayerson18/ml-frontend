import React from 'react';
import { Container } from 'reactstrap';
import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';

const Header = () => (
  <Container className="bg-primary py-2" fluid>
    <Container className="d-flex px-0">
      <Logo />
      <div className="w-100 ml-3 ml-md-4">
        <SearchBar />
      </div>
    </Container>
  </Container>
);

export default Header;