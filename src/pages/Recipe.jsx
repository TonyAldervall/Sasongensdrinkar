import React from 'react';
import { useParams } from 'react-router-dom';
import Ingredients from '../components/Ingredients';
import Navbar from '../components/Navbar';
import Instructions from '../components/Instructions';
import '../styles/Recipe.css';
import RatingSection from '../components/Rating';


function Recipe() {
    const { recipeId } = useParams();

  return (
    <>
      <Navbar />
      <h1>Hello {recipeId}!</h1>
      <RatingSection />
      <div className='recipeContainer'>
        <Ingredients />
        <Instructions />
      </div>
    </>
  );
}

export default Recipe;