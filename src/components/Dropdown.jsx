import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Dropdown.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Offcanvas } from 'react-bootstrap';
import BarsIcon from './BarsIcon';
import CrossIcon from './CrossIcon';



function DropDown() {
    const [show, setShow] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleShow = () => {
        if(show){
            setShow(false);
            setDropdownOpen(false);
        }else{
            setShow(true);
            setDropdownOpen(false);
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
            <button type='button' onClick={handleShow} className='menu-button'>
                {show ? <CrossIcon/> : <BarsIcon/>}
            </button>
            <Offcanvas 
            className='sidebar' 
            show={show} 
            onHide={handleClose} 
            placement='end'
            backdrop={false}
            scroll={true}>
                <Offcanvas.Body>
                <div className='dropdown-links-container'>
                    <Link className='dropdown-link' as={Link} to="/toplist" onClick={handleItemClick}>Topplista</Link>
                    <Link className='dropdown-link' as={Link} to="/category/cocktail" onClick={handleItemClick}>Cocktails</Link>
                    <Link className='dropdown-link' as={Link} to="/category/vodka" onClick={handleItemClick}>Vodka</Link>
                    <Link className='dropdown-link' as={Link} to="/category/klassisk" onClick={handleItemClick}>Klassisk</Link>
                </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

export default DropDown;