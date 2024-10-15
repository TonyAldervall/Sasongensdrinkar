import React from 'react';
import { useParams } from 'react-router-dom';
import Ingredients from '../components/Ingredients';


function Recipe() {
    const { recipeId } = useParams();

  return (
    <>
      <h1>Hello {recipeId}!</h1>
      <Ingredients />
    </>
  );
}

export default Recipe;