import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, InputGroup, Input } from 'reactstrap';
import icSearchSmall from "../../assets/img/ic_Search.png";
import { useItem } from '../../context/ItemContext';

const SearchBar = () => {
  const { search, handleSearchChange } = useItem();
  const history = useHistory();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    history.push(`/items?search=${search}`);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <Input 
          value={search}
          onChange={handleSearchChange}
          placeholder="Nunca dejes de buscar" />
        <Button 
          type="submit"
          color="light"
          className="rounded-0">
          <img src={icSearchSmall} alt="search" width="auto" height="auto" />
        </Button>
      </InputGroup>
    </Form>
  );
}

export default SearchBar;