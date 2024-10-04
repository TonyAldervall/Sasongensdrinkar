import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import '../styles/Navbar.css';
import { NavLink } from 'react-router-dom';
import logo from '../styles/Logotyp_Säsongensdrinkar_förslag.png';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar(){
    return(
        <div className='navbar'>
            <NavLink to='/' className='home-button'>
            <img className='logo' src={logo} alt="Logo" />
            </NavLink >
            {/* <SearchBar/> */}
            <DropdownButton id='dropdown-button' title='Kategorier'>
                <Dropdown.Item href=''>Höst</Dropdown.Item>
                <Dropdown.Item href=''>Vår</Dropdown.Item>
                <Dropdown.Item href=''>Sommar</Dropdown.Item>
                <Dropdown.Item href=''>Vinter</Dropdown.Item>
            </DropdownButton>
        </div>
    );
}
export default Navbar;

