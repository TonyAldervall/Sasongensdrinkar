import React, { useState, useEffect } from 'react';
import { fetchData } from '../utils/fetch';
import { Link } from 'react-router-dom';
import '../styles/category-section.css';
import DrinkCards from './DrinkCards';

const CategorySection = ({ category }) => {
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        async function getData() {
            const result = await fetchData('https://recept5-kivel.reky.se/recipes');

            const filtered = result
            .filter(item => item.categories.includes(category))
            .sort((a, b) => b.avgRating - a.avgRating)
            .slice(0, 3);
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
            <DrinkCards data={filteredData}/>
        </div>
    );
};

export default CategorySection;