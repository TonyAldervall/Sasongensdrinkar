import React from 'react';
import { useParams } from 'react-router-dom';


function Recipe() {
    const { recipeId } = useParams();

  return (
    <>
      <h1>Hello {recipeId}!</h1>
    </>
  );
}

export default Recipe;