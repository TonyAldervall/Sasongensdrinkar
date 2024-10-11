import React, { useState, useEffect } from 'react';
import { fetchData } from '../utils/fetch';
import { Link } from 'react-router-dom';
import '../styles/drink-result-section.css';



const DrinkResultSection = ({ category, searchTerm}) => {
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        async function getData() {
            const result = await fetchData('https://recept5-kivel.reky.se/recipes');

            if(category !== null){
                const filtered = result.filter(item => item.categories.includes(category));
                setFilteredData(filtered);
            }
            else if(searchTerm !== null){
                const filtered = result.filter(item => 
                    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.categories.some(category => category.toLowerCase().includes(searchTerm.toLowerCase())) ||
                    item.ingredients.some(ingredient => ingredient.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
                    item.description.toLowerCase().includes(searchTerm.toLowerCase())
                    );
                setFilteredData(filtered);
            }
        }
            
        getData();
    }, [category, searchTerm]);

  return (
    <div className="category-section">

        {filteredData.map((drink, index) => (
        <div className='drink-card' key={index}>

            <Link to={`/recipe/${drink._id}`} className='drink-link'>
                <div className='drink-image-container'>
                    <img src={drink.imageUrl} alt={`Picture for ${drink.title}`} />
                </div>

                <div className='drink-details-container'>
                    <h2 className='drink-title'>{drink.title}</h2>
                </div>
            </Link>
        </div>
        ))}
    </div>
  );
};

export default DrinkResultSection;