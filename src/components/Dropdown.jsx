import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css';
import { HashLink } from 'react-router-hash-link';


function DropDown(){
    return(
        <DropdownButton id='dropdown-button' title='Kategorier'>
            <Dropdown.Item as={HashLink} to="/category/Höst">Höst</Dropdown.Item>
            <Dropdown.Item as={HashLink} to="/category/Vår">Vår</Dropdown.Item>
            <Dropdown.Item as={HashLink} to="/category/Sommar">Sommar</Dropdown.Item>
            <Dropdown.Item as={HashLink} to="/category/Vinter">Vinter</Dropdown.Item>
        </DropdownButton>
    )
}
export default DropDown;