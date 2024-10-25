import React, { useState, useEffect } from 'react';
import { fetchData } from '../utils/fetch';
import { useParams } from 'react-router-dom';
import '../styles/Recipe.css';

const Instructions = () => {
    const [instructions, setInstructions] = useState ([]);
    const { recipeId } = useParams();

     useEffect(()=>{
        async function fetchInstructions(){
            const response = await fetchData(`https://recept5-kivel.reky.se/recipes/${recipeId}`);
            
            if (response && response.instructions) {
                setInstructions(response.instructions);
            }  
             
        }
        
    
    if (recipeId) {
        fetchInstructions();
    }
    }, [recipeId]); 

    const [checked, setChecked] = React.useState([]);
    function handleCheck(e){
        setChecked(e.target.checked);
    }

    

    return(
        <div className='instructions'>
            <div className='todo'>
                <h3>Gör så här:</h3>
            </div>
            <ul>
                {instructions.map((instruction, index)=> (
                    <li key={index}>
                        <input className='box' type="checkbox" id={`checkbox-${index}`} onChange={handleCheck} />
                        <span>{instruction}</span>
                    </li>
                ))}  
                
            </ul>

        </div>
    );
}

export default Instructions;