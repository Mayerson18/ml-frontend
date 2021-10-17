import React from 'react';
import { Container } from 'reactstrap';
import Categories from '../components/Categories';
import { ICategories } from '../components/Categories/interfaces';

const ContentLayout = (props: ICategories) => (
  <>
    <Container className="my-3 px-0">
      <Categories categories={props.categories} />
    </Container>
    <Container className="bg-white">
      {props.children}
    </Container>
  </>
);

export default ContentLayout;