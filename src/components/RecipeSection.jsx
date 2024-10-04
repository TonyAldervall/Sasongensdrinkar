import React, { useState, useEffect } from 'react';
import { fetchData } from '../utils/fetch';
import '../styles/recipe-section.css';


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
            <div className='recipe-card-container' key={index}>
              <div className='recipe-card-image'>
                <img src={recipe.imageUrl} alt={`Picture for ${recipe.title}`} />
              </div>
              <div className='recipe-card-text'>
                <h2> {recipe.title}</h2>
                <h4> {recipe.description}</h4>
                <h5> {recipe.price} kr</h5>
              </div>
            </div>
          ))}
      </>
  );
}