import React, { useState, useEffect } from 'react';
import { fetchData } from '../utils/fetch';
import '../styles/category-section.css';
import DrinkCards from './DrinkCards';

function ToplistSection(){
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        async function getData() {
            const result = await fetchData('https://recept5-kivel.reky.se/recipes');

            const filtered = result
            .sort((a, b) => b.avgRating - a.avgRating)
            .slice(0, 10);
            setFilteredData(filtered);
        }
        
        getData();
    }, []);

    return(
        <DrinkCards data={filteredData}/>
    )
}

export default ToplistSection;