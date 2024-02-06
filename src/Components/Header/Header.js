import React from 'react';
import Logo from './Parts/Logo';
import Navbar from './Parts/Navbar';
import './Header.css';

export default function Header() {
    return (
        <header>
            <div className='container'>
                <div className='header-content'>
                    <Logo />
                    <Navbar />
                </div>
            </div>
        </header>
    );
}
