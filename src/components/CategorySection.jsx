import React, { useState, useEffect } from 'react';
import { fetchData } from '../utils/fetch';
import { Link } from 'react-router-dom';
import '../styles/category-section.css';
import Difficulty from './Difficulty';

const CategorySection = ({ category }) => {
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        async function getData() {
            const result = await fetchData('https://recept5-kivel.reky.se/recipes');

            const filtered = result.filter(item => item.categories.includes(category));
            setFilteredData(filtered);
        }
        
        getData();
    }, [category]);

    return (
        <div className="category-section">
            <div className="category-header" id={`category-${category}`}>
                <h2 className='category-title'>{category}drinkar</h2>
                <Link to={`/category/${category}`} className='category-link'>Visa fler...</Link>
            </div>

            <div className="drink-grid">
                {filteredData.slice(0, 3).map((drink, index) => (
                    <div className='drink-card' key={index}>
                        <Link to={`/recipe/${drink._id}`} className='drink-link'>
                            <div className='drink-image-container'>
                                <img src={drink.imageUrl} alt={`Picture for ${drink.title}`} />
                            </div>
                            <div className='drink-details-container'>
                                <h2 className='drink-title'>{drink.title}</h2>
                            </div>
                            <div className="drink-extra-details">
                                <p><strong>Icon1</strong> {drink.timeInMins} min</p>
                                <p>Ingredienser: {drink.ingredients.length}</p>
                                <Difficulty 
                                nrIngredients={drink.ingredients.length} 
                                nrInstructions={drink.instructions.length} 
                                />
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategorySection;