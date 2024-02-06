import React, { useState } from 'react';
import './Register.css';

export default function Register() {
    const [formData, setFormData] = useState({
        paperName: '',
        description: '',
        pdfFile: null,
        email: '',
        phoneNumber: '',
        authors: ['', '', '', ''],
    });

    const handleChange = e => {
        const { name, value, files } = e.target;
        if (name === 'pdfFile') {
            setFormData({ ...formData, [name]: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        // Add your registration logic here, e.g., send the form data to the server
        console.log('Form submitted:', formData);
    };

    return (
        <div className='register-container'>
            <h2>Register</h2>
            <div className='scrollable-container'>
                <form onSubmit={handleSubmit} className='register-form'>
                    <label>
                        Name of Paper:
                        <input
                            type='text'
                            name='paperName'
                            value={formData.paperName}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Description:
                        <textarea
                            name='description'
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        PDF Upload:
                        <input
                            type='file'
                            name='pdfFile'
                            accept='.pdf'
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Email ID:
                        <input
                            type='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Phone Number:
                        <input
                            type='tel'
                            name='phoneNumber'
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <br />
                    {[1, 2, 3, 4].map(index => (
                        <label key={index}>
                            Author {index}:
                            <input
                                type='text'
                                name={`author${index}`}
                                value={formData.authors[index - 1]}
                                onChange={e => {
                                    const newAuthors = [...formData.authors];
                                    newAuthors[index - 1] = e.target.value;
                                    setFormData({
                                        ...formData,
                                        authors: newAuthors,
                                    });
                                }}
                            />
                        </label>
                    ))}
                    <br />
                    <button type='submit' className='register-button'>
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}
