import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Dropdown.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import { Offcanvas } from 'react-bootstrap';



function DropDown() {
    const [show, setShow] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleShow = () => {
        if(show){
            setShow(false);
            setDropdownOpen(false);
            document.body.style.overflow = 'auto'; 
        }else{
            setShow(true);
            document.body.style.overflow = 'visible'; 
        }
    }
        
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
                {<FontAwesomeIcon icon={show ? faTimes : faBars} id='icon'/>}
            </Button>
            <Offcanvas 
            className='sidebar' 
            show={show} 
            onHide={handleClose} 
            placement='top' 
            backdrop={false}
            scroll={true}>
                <Offcanvas.Body>
                    <div className='dropdown-links-container'>
                        <Link className='dropdown-link' as={Link} to="/toplist" onClick={handleItemClick}>Topplista</Link>
                        <Link className='dropdown-link' as={Link} to="/category/cocktail" onClick={handleItemClick}>Cocktails</Link>
                        <Link className='dropdown-link' as={Link} to="/category/vodka" onClick={handleItemClick}>Vodka</Link>
                        <Link className='dropdown-link' as={Link} to="/category/klassisk" onClick={handleItemClick}>Klassisk</Link>
                    </div>
                    <DropdownButton 
                    id='season-button' 
                    show={dropdownOpen} 
                    onClick={toggleDropdown} 
                    title={
                        <span className='season-button'>
                            <FontAwesomeIcon icon={dropdownOpen ? faChevronUp : faChevronDown} id='arrow'/> Säsonger
                        </span>
                    }>
                        <div className='dropdown-menu'style={{ display: dropdownOpen ? 'block' : 'none'}}>
                            <div className='items'>
                            <Dropdown.Item as={Link} to="/category/Höst" onClick={handleItemClick}>Höst</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/category/Vinter" onClick={handleItemClick}>Vinter</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/category/Vår" onClick={handleItemClick}>Vår</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/category/Sommar" onClick={handleItemClick}>Sommar</Dropdown.Item>
                            </div>
                        </div>
                    </DropdownButton>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

export default DropDown;