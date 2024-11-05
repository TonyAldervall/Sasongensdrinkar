import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/sidebar.css';
import { Link } from 'react-router-dom';
import { Offcanvas } from 'react-bootstrap';
import BarsIcon from './BarsIcon';
import CrossIcon from './CrossIcon';



function SideBar() {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        if(show){
            setShow(false);
        }else{
            setShow(true);
        }
    }
        
    const handleClose = () => {
        setShow(false);
    }

    const handleItemClick = () => {
        handleClose();
    }

    return (
        <div className='sidebar-container'>
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
                <div className='sidebar-links-container'>
                    <Link className='sidebar-link' as={Link} to="/topplista" onClick={handleItemClick}>Topplista</Link>
                    <Link className='sidebar-link' as={Link} to="/category/cocktail" onClick={handleItemClick}>Cocktails</Link>
                    <Link className='sidebar-link' as={Link} to="/category/vodka" onClick={handleItemClick}>Vodka</Link>
                    <Link className='sidebar-link' as={Link} to="/category/klassisk" onClick={handleItemClick}>Klassisk</Link>
                </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

export default SideBar;