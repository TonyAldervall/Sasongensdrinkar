import React, { useState, useEffect } from 'react';
import SearchBar from './searchbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css';
import { NavLink, useParams } from 'react-router-dom';
import logo from '../styles/loggan.png';
import DropDown from './Dropdown';
import { fetchData } from '../utils/fetch';
import { Link } from 'react-router-dom';

function Navbar() {

    const {recipeId} = useParams();
    const { categoryId } = useParams();
    const [category, setCategory] = useState();


    useEffect (() => {
        const body = document.body;
            body.classList.remove('sommar', 'vinter', 'höst', 'vår')
        if(recipeId){
            async function fetchCategory(){
                const response = await fetchData(`https://recept5-kivel.reky.se/recipes/${recipeId}`);
                
                if (response && response.categories) {
                    const season = ['sommar', 'vinter', 'höst', 'vår']
                    const recipeSeason = response.categories.map(category => category.toLowerCase());
                    const getSeason = season.find(season => recipeSeason.includes(season));

                    if(getSeason){
                        setCategory(getSeason);
                        body.classList.add(getSeason);
                    }
                }  
                 
            }
            fetchCategory();
        } else if (categoryId){
            setCategory(categoryId.toLowerCase());
            body.classList.add(categoryId.toLowerCase());
        } else{
            setCategory('höst');
            body.classList.add('höst');
        }

    }, [recipeId, categoryId])

    return (
        <>
        <div className={`navbar-outer ${category}`}>
            <div className='navbar' >
                <NavLink to='/' className='home-button'>
                    <img className='logo' src={logo} alt="Logo" />
                </NavLink>
                <SearchBar />
                <DropDown />
            </div>
        </div>
        <div className='navbar-bottom-outer'>
            <div className='navbar-bottom'>
                <NavLink className='navbar-bottom-button winter' to='/category/vinter'>
                    <span>Vinter</span>
                </NavLink>
                <NavLink className='navbar-bottom-button spring' to='/category/vår'>
                    <span>Vår</span>
                </NavLink>
                <NavLink className='navbar-bottom-button summer' to='/category/sommar'>
                    <span>Sommar</span>
                </NavLink>
                <NavLink className='navbar-bottom-button autumn' to='/category/höst'>
                    <span>Höst</span>
                </NavLink>
            </div>
        </div>
        </>
        
    );
}

export default Navbar;