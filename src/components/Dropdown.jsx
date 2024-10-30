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


function DropDown(){

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
        if(dropdownOpen){
            setDropdownOpen(false);
        } else {
            setDropdownOpen(true);
        }
    }
    
    return(
        <div className='dropdown-container'>
            <Button variant="primary" onClick={handleShow}>
                {<FontAwesomeIcon icon={faBars} id='icon'/>}
            </Button>
            <Offcanvas className='sidebar' show={show} onHide={handleClose} placement='end' backdrop={false}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className='sidebar-title'>Våra drinkar</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Link className='topList' as={HashLink} to="/toplist" onClick={handleItemClick}> Topplista </Link>
                    <DropdownButton id='season-button' title='Säsonger' show={dropdownOpen} onClick={toggleDropdown}>
                        <div className='dropdown-menu.show'style={{ display: dropdownOpen ? 'block' : 'none'}}>
                            <Dropdown.Item as={HashLink} to="/category/Höst" onClick={handleItemClick}>Höst</Dropdown.Item>
                            <Dropdown.Item as={HashLink} to="/category/Vinter" onClick={handleItemClick}>Vinter</Dropdown.Item>
                            <Dropdown.Item as={HashLink} to="/category/Vår" onClick={handleItemClick}>Vår</Dropdown.Item>
                            <Dropdown.Item as={HashLink} to="/category/Sommar" onClick={handleItemClick}>Sommar</Dropdown.Item>
                        </div>
                    </DropdownButton>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
        
    )

}
export default DropDown;