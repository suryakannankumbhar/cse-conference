import React from 'react';
import logo from './niet-logo.png';

export default function Logo() {
    return (
        <div className='logo'>
            <img src={logo} alt='Logo' />
            <div className='logo-text'>
                <h1>NEHRU INSTITUTE OF ENGINEERING AND TECHNOLOGY</h1>
                <h5>An Autonomous Institution</h5>
            </div>
        </div>
    );
}
