import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css';

function DropDown(){
    return(
        <DropdownButton id='dropdown-button' title='Kategorier'>
            <Dropdown.Item href='#'>Höst</Dropdown.Item>
            <Dropdown.Item href='#'>Vår</Dropdown.Item>
            <Dropdown.Item href='#'>Sommar</Dropdown.Item>
            <Dropdown.Item href='#'>Vinter</Dropdown.Item>
        </DropdownButton>
    )
}
export default DropDown;