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
            placement='top' 
            backdrop={false}
            scroll={true}>
                <Offcanvas.Body>
                <div className='dropdown-links-container'>
                    {/* <Link className='dropdown-link winter' as={Link} to="/category/Vinter" onClick={handleItemClick}>Vinter</Link>
                    <Link className='dropdown-link spring' as={Link} to="/category/Vår" onClick={handleItemClick}>Vår</Link>
                    <Link className='dropdown-link summer' as={Link} to="/category/Sommar" onClick={handleItemClick}>Sommar</Link>
                    <Link className='dropdown-link autumn' as={Link} to="/category/Höst" onClick={handleItemClick}>Höst</Link> */}

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