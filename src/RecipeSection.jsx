import { fetchData, postRecipe } from './fetch';
import React, { useState, useEffect } from 'react';

export function RecipeSection() {
    const [data, setData] = useState([]);
    const [newRecipe, setNewRecipe] = useState({
    "title": "TEST",
    "description": "Gott till champagne",
    "ratings": [],
    "imageUrl": "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_223427/cf_259/korvstroganoff_med_ris.jpg",
    "timeInMins": 15,
    "price": 150,
    "categories": ["Förrätt", "Skaldjur", "Smaskigt"],
    "instructions": ["Stek brödet", "Lägg på röran", "Toppa med Dill"],
    "ingredients": [
        { "name": "Salt", "amount": 1, "unit": "tsk" },
        { "name": "Peppar", "amount": 1, "unit": "tsk" },
        { "name": "Smör", "amount": 100, "unit": "gram" }
  ]
});


useEffect(() => {
  async function getData() {
    const result = await fetchData('https://recept5-kivel.reky.se/recipes');
    setData(result);
  }

  getData();
}, []);
    
    return (

        <>
          {data.length > 0 &&
            data.map((recipe, index) => (
              <div className='RecipeCard'>
                <h2 key={index}> {recipe.title}</h2>
                <h4 key={index}> {recipe.description}</h4>
                <h5 key={index}> {recipe.price} kr</h5>
              </div>
              
            ))}
        </>
     );
}

