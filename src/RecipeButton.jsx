import React, { useState, useEffect } from 'react';
import { fetchData, postRecipe } from "./fetch";

export function RecipeButton(){
    const [data, setData] = useState([]);
    useEffect(() => {
        async function getData() {
          const result = await fetchData('https://recept5-kivel.reky.se/recipes');
          setData(result);
        }
      
        getData();
    });

    const [newRecipe, setNewRecipe] = useState({
        "title": "TEST 2",
        "description": "Fin frukost",
        "ratings": [],
        "imageUrl": "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_223427/cf_259/korvstroganoff_med_ris.jpg",
        "timeInMins": 15,
        "price": 210,
        "categories": ["Förrätt", "Skaldjur", "Smaskigt"],
        "instructions": ["Stek brödet", "Lägg på röran", "Toppa med Dill"],
        "ingredients": [
            { "name": "Salt", "amount": 1, "unit": "tsk" },
            { "name": "Peppar", "amount": 1, "unit": "tsk" },
            { "name": "Smör", "amount": 100, "unit": "gram" }
        ]
    });

    async function handleButtonClick(){
        const result = await postRecipe(newRecipe);
        setData([...data, result]);
    }

    return(
        <><button onClick={handleButtonClick}>Add New Recipe</button></>
    );
}