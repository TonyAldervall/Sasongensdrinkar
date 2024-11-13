import React, { useState, useEffect } from 'react';
import { fetchData } from '../utils/fetch';
import DrinkCards from './DrinkCards';


const DrinkResultSection = ({ category, searchTerm}) => {
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        async function getData() {
            const result = await fetchData('https://recept5-kivel.reky.se/recipes');

            if(category !== null){
                const filtered = result.filter(item => item.categories.some(cat => cat.toLowerCase() === category.toLowerCase()));
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
                <p className='no-match'>Ingen match hittad för sökningen: "{searchTerm}".</p>
            ) : (
                <DrinkCards data={filteredData}/>
            )}
        </div>
    );
};

export default DrinkResultSection;