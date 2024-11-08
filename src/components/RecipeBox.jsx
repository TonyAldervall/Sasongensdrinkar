import React from 'react';
import Difficulty from './Difficulty';
import TimeIcon from './TimeIcon';
import RatingSection from './Rating';
import '../styles/RecipeBox.css';
import IngredientsIcon from './IngredientsIcon';

const RecipeBox = ({ recipeData }) => {
    if (!recipeData) return null;

    return (
        <div className='recipe-box'>
            <div className='recipe-image-container'>
                <img src={recipeData.imageUrl} alt={`Picture of ${recipeData.title}`} />
            </div>

            <div className='recipe-details-container'>
                <h1 className='recipe-title'>{recipeData.title}</h1>

                <div className='recipe-icon-info-div'>
                    <span><TimeIcon /> {recipeData.timeInMins} min</span>
                    <span><IngredientsIcon /> {recipeData.ingredients.length}</span>
                    <Difficulty
                        nrIngredients={recipeData.ingredients.length}
                        nrInstructions={recipeData.instructions.length}
                    />
                </div>

                <p className='recipe-description'>{recipeData.description}</p>

                <div className='recipe-rating-div'>
                    <RatingSection rating={recipeData.ratings} />
                </div>
            </div>
        </div>
    );
};

export default RecipeBox;