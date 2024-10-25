import React from 'react';
import Difficulty from './Difficulty';
import TimeIcon from './TimeIcon';
import RatingSection from './Rating';
import '../styles/RecipeBox.css';

const RecipeBox = ({ recipeData }) => {
    if (!recipeData) return null;

    return (
        <div className='recipe-box'>
            <div className='recipe-image-container'>
                <img src={recipeData.imageUrl} alt={`Picture of ${recipeData.title}`} />
            </div>

            <div className='recipe-details-container'>
                <h1>{recipeData.title}</h1>
                <p>{recipeData.description}</p>

                <div className='recipe-icon-info-div'>
                    <span><TimeIcon /> {recipeData.timeInMins} min</span>
                    <Difficulty
                        nrIngredients={recipeData.ingredients.length}
                        nrInstructions={recipeData.instructions.length}
                    />
                </div>

                <RatingSection/>
            </div>
        </div>
    );
};

export default RecipeBox;
