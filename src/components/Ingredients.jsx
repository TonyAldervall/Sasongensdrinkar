import React, { useState, useEffect } from 'react';
import { fetchData } from '../utils/fetch';
import { useParams } from 'react-router-dom';
import '../styles/Recipe.css';
import Glasses from './AdjustGlass';

const Ingredients = () => {
    const [ingredients, setIngredients] = useState ([]);
    const { recipeId } = useParams();
    const[count, setCount] = useState(1);

     useEffect(()=>{
        async function fetchIngredients(){
            const response = await fetchData(`https://recept5-kivel.reky.se/recipes/${recipeId}`);
            
            if (response && response.ingredients) {
                setIngredients(response.ingredients);
            }  
             
        }
        
    
    if (recipeId) {
        fetchIngredients();
    }
    }, [recipeId]); 

    const adjustIngredients = ingredients.map(ingredient => ({
        ...ingredient, amount: ingredient.amount * count
    }));


    return(
        <div className='ingredients'>
            <div className='header'>
                <h3 className='title'>Ingredienser</h3>
                <Glasses count={count} setCount={setCount}/>
            </div>
            <ul>
                {adjustIngredients.map((ingredient, index)=> (
                    <li key={index}>
                        {ingredient.amount}  {ingredient.unit} {ingredient.name}
                    </li>
                ))}
                
            </ul>
        </div>
    )
}
export default Ingredients;