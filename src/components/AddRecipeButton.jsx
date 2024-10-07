import React, { useState, useEffect } from 'react';
import { fetchData, postRecipe } from "../utils/fetch";

export function AddRecipeButton(){
    const [data, setData] = useState([]);
    useEffect(() => {
        async function getData() {
          const result = await fetchData('https://recept5-kivel.reky.se/recipes');
          setData(result);
        }
      
        getData();
    });

    const [newRecipe, setNewRecipe] = useState({
        "title": "Vinter Drinken",
        "description": "Röd och härlig",
        "ratings": [],
        "imageUrl": "https://www.cocktailia.se/images/74/gnynv2-how-to-kill-a-friend-tropisk-drink-med-mezcal-cocktailiase-960x800_109x64.jpg",
        "timeInMins": 15,
        "price": 40,
        "categories": ["Förrätt", "Skaldjur", "Vinter"],
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