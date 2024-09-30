import React, { useState, useEffect } from 'react';
import { fetchData, postRecipe } from './fetch';

function App() {
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

  const handlePostData = async () => {
    const result = await postRecipe(newRecipe);
    setData([...data, result]);
  };

  useEffect(() => {
    async function getData() {
      const result = await fetchData('https://recept5-kivel.reky.se/recipes');
      setData(result);
    }

    getData();
  }, []);

  return (
    <>
      <h1>Välkommen</h1>
      <h2>Bästa receptsidan.</h2>

      {data.length > 0 && (
      data.map((recipe, index) => (
        <p key={index}>{recipe.title}</p>
      )))}

      <button onClick={handlePostData}>Add New Recipe</button>
    </>
  );
}

export default App;