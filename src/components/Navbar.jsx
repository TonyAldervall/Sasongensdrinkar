import React, { useState, useEffect } from 'react';
import SearchBar from './Searchbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css';
import { NavLink } from 'react-router-dom';
import logo from '../styles/Logotyp_Säsongensdrinkar_förslag.png';
import DropDown from './Dropdown';

function Navbar() {
    return (
        <div className='navbar'>
            <NavLink to='/' className='home-button'>
                <img className='logo' src={logo} alt="Logo" />
            </NavLink>
            <SearchBar />
            <DropDown />
        </div>
    );
}

export default Navbar;