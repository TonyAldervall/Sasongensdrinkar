import React, { useState, useEffect } from 'react';
import { fetchData } from './fetch';


export function RecipeSection() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const result = await fetchData('https://recept5-kivel.reky.se/recipes');
      setData(result);
    }

    getData();
  });

  return (
      <>
        {data.length > 0 &&
          data.map((recipe, index) => (
            <div className='RecipeCard' key={index}>
              <h2> {recipe.title}</h2>
              <h4> {recipe.description}</h4>
              <h5> {recipe.price} kr</h5>
            </div>
          ))}
      </>
  );
}