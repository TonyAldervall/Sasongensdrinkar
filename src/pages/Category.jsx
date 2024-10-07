import React from 'react';
import { useParams } from 'react-router-dom';


function Category() {
    const { categoryId } = useParams();

  return (
    <>
      <h1>Hello {categoryId}!</h1>
    </>
  );
}

export default Category;