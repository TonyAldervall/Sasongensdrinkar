import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css';
import { NavLink } from 'react-router-dom';
import logo from '../styles/Logotyp_Säsongensdrinkar_förslag.png';
import DropDown from './Dropdown';

function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar-left'>
                <NavLink to='/' className='home-button'>
                    <img className='logo' src={logo} alt="Logo" />
                </NavLink>
                <DropDown />

            </div>
            <div className='navbar-right'>
            </div>
            <SearchBar />
        </div>
    );
}

export default Navbar;