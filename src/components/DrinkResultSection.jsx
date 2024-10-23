import React, { useState, useEffect } from 'react';
import { fetchData } from '../utils/fetch';
import { Link } from 'react-router-dom';
import Difficulty from './Difficulty';
import '../styles/drink-card.css';
import RatingSection from './Rating';
import TimeIcon from './TimeIcon';
import IngredientsIcon from './IngredientsIcon';


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
        <div className="drink-result-section">
            {filteredData.length === 0 ? (
                <p className='no-match'>No matches were found for search: "{searchTerm}".</p>
            ) : (
                <div className="drink-grid">
                    {filteredData.map((drink, index) => (
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
                                    <RatingSection rating={drink.avgRating} readOnly={true} />
                                </div>
                            </div>

                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DrinkResultSection;