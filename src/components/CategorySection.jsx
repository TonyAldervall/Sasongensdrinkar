import React, { useState, useEffect } from 'react';
import { fetchData } from '../utils/fetch';
import { Link } from 'react-router-dom';
import '../styles/drink-card.css';
import '../styles/category-section.css';
import Difficulty from './Difficulty';
import TimeIcon from './TimeIcon';
import IngredientsIcon from './IngredientsIcon';

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
                <h1 className='category-title'>{category}drinkar</h1>
                <Link to={`/category/${category}`} className='category-link'>Visa fler...</Link>
            </div>

            <div className="drink-grid">
                {filteredData.slice(0, 3).map((drink, index) => (
                    <Link to={`/recipe/${drink._id}`} className='drink-card' key={index}>
                            <div className='drink-image-container'>
                                <img src={drink.imageUrl} alt={`Picture for ${drink.title}`} />
                            </div>

                            <div className='drink-details-container'>

                                <h2 className='drink-title'>{drink.title}</h2>


                                <div className='drink-icon-info-div'>
                                    <span><TimeIcon /> {drink.timeInMins} min</span>
                                    <span><IngredientsIcon /> {drink.ingredients.length}</span>
                                    <Difficulty
                                    nrIngredients={drink.ingredients.length}
                                    nrInstructions={drink.instructions.length}>
                                    </Difficulty>
                                </div>

                                <div className='drink-rating-div'>
                                    Placeholder Rating {/* Rating component that shows the average rating */}
                                </div>
                            </div>

                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategorySection;