// Navbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='navbar'>
            <div className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
                <NavLink to='/' className='tabLink'>
                    <h3 className='button-text'>Home</h3>
                </NavLink>
                <NavLink to='/register' className='tabLink'>
                    <h3 className='button-text'>Register</h3>
                </NavLink>
                <NavLink to='/about' className='tabLink'>
                    <h3 className='button-text'>About NIET</h3>
                </NavLink>
                <NavLink to='/speakers' className='tabLink'>
                    <h3 className='button-text'>Speakers</h3>
                </NavLink>
                <NavLink to='/contact' className='tabLink'>
                    <h3 className='button-text'>Contact</h3>
                </NavLink>
            </div>
            <button className='hamburger-menu' onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    );
};

export default Navbar;
