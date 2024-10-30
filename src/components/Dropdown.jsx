import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Dropdown.css';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import { Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function DropDown() {
    const [show, setShow] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => {
        setShow(false);
        setDropdownOpen(false);
    }

    const handleItemClick = () => {

        handleClose();
    }

    const toggleDropdown = () => {
        setDropdownOpen(prev => !prev);
    }

    return (
        <div className='dropdown-container'>
            <Button variant="primary" onClick={handleShow}>
                <FontAwesomeIcon icon={faBars} id='icon' />
            </Button>
            <Offcanvas className='sidebar' show={show} onHide={handleClose} placement='end' backdrop={false}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className='sidebar-title'>Våra drinkar</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <DropdownButton
                        id='season-button'
                        title='Säsonger'
                        variant="light"
                        drop="down"
                        show={dropdownOpen}
                        onClick={toggleDropdown}
                    >
                        <Dropdown.Item as={HashLink} to="/category/höst" onClick={[handleItemClick, toggleDropdown]}>Höst</Dropdown.Item>
                        <Dropdown.Item as={HashLink} to="/category/vinter" onClick={[handleItemClick, toggleDropdown]}>Vinter</Dropdown.Item>
                        <Dropdown.Item as={HashLink} to="/category/vår" onClick={[handleItemClick, toggleDropdown]}>Vår</Dropdown.Item>
                        <Dropdown.Item as={HashLink} to="/category/sommar" onClick={[handleItemClick, toggleDropdown]}>Sommar</Dropdown.Item>
                    </DropdownButton>

                    <div className='dropdown-links-container'>
                        <Link className='dropdown-link' as={HashLink} to="/toplist" onClick={handleItemClick}>Topplista</Link>
                        <Link className='dropdown-link' as={HashLink} to="/category/cocktail" onClick={handleItemClick}>Cocktails</Link>
                        <Link className='dropdown-link' as={HashLink} to="/category/vodka" onClick={handleItemClick}>Vodka</Link>
                        <Link className='dropdown-link' as={HashLink} to="/category/klassisk" onClick={handleItemClick}>Klassisk</Link>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

export default DropDown;