import React from 'react';
import './Contact.css'; // Import the CSS file for styling

export default function Contact() {
    return (
        <div className='contact-container'>
            <h1>Contact Us</h1>
            <div className='contact-details'>
                <p>Contact Number: 1234567890</p>
                <p>Email: abc@xyz.com</p>
                <p>Address: Some Address, Some State</p>
            </div>
        </div>
    );
}
