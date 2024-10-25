import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Ingredients from '../components/Ingredients';
import Navbar from '../components/Navbar';
import Instructions from '../components/Instructions';
import '../styles/Recipe.css';
import RatingSection from '../components/Rating';
import Comments from '../components/CommentSection.jsx';
import RecipeBox from '../components/RecipeBox.jsx';
import { fetchData } from '../utils/fetch';

function Recipe() {
    const { recipeId } = useParams();
    const [recipeData, setRecipeData] = useState(null);

    useEffect(() => {
        const fetchRecipeData = async () => {
            const data = await fetchData(`https://recept5-kivel.reky.se/recipes/${recipeId}`);
            setRecipeData(data);
        };

        if (recipeId) { 
            fetchRecipeData();
        }
    }, [recipeId]);

    return (
        <>
            <Navbar />
            {recipeData && (
                <>
                    <RecipeBox recipeData={recipeData} />
                    <RatingSection rating={recipeData.ratings?.length > 0 ? recipeData.ratings.reduce((a, b) => a + b) / recipeData.ratings.length : 0} readOnly={true} />

                    <div className='recipeContainer'>
                        <Ingredients ingredients={recipeData.ingredients} />
                        <Instructions instructions={recipeData.instructions} />
                    </div>

                    <div className="comments-wrapper"> 
                        <Comments recipeId={recipeId} />
                    </div>
                </>
            )}
        </>
    );
}

export default Recipe;