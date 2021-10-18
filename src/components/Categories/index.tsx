import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { ICategories } from './interfaces';

const Categories = ({categories}: ICategories) => {
  const {length} = categories;

  return (
    <Breadcrumb 
      tag="nav" 
      listTag="div" 
      listClassName="p-0 mb-0 transparent"
      aria-label=">">
      {
        categories.map((category: any, index: number) => (
          <BreadcrumbItem 
            key={`category${index}`}
            tag="span"
            >
            <small 
              className={`extra-light ${(index+1) === length ? "font-weight-bold" : ""}`}>
              {category}
            </small>
          </BreadcrumbItem>
        ))
      }
    </Breadcrumb>
  );
};

export default Categories;