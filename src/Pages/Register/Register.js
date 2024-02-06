import React, { useState } from 'react';
import { pdfDB, txtDB } from './conferenceConfig';
import { v4 } from 'uuid';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';
import './Register.css';

function Register() {
    const [paperTitle, setPaperTitle] = useState('');
    const [paperAbstract, setPaperAbstract] = useState('');
    const [paperPDF, setPaperPDF] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [authors, setAuthors] = useState([]);

    const handleUpload = e => {
        console.log(e.target.files[0]);
        const pdfs = ref(pdfDB, `PDF/${v4()}`);
        uploadBytes(pdfs, e.target.files[0]).then(data => {
            console.log(data, 'pdfs');
            getDownloadURL(data.ref).then(val => {
                setPaperPDF(val);
                console.log(val);
            });
        });
    };

    const handleClick = async () => {
        if (
            !paperTitle ||
            !paperAbstract ||
            !paperPDF ||
            !email ||
            !phoneNumber ||
            !authors[0]?.name ||
            !authors[0]?.designation ||
            !authors[0]?.university ||
            !authors[0]?.email ||
            !authors[0]?.mobileNumber
        ) {
            alert('Please fill in all compulsory fields.');
            return;
        }

        const valRef = collection(txtDB, 'ConferenceData');
        await addDoc(valRef, {
            paperTitle: paperTitle,
            paperAbstract: paperAbstract,
            pdfURL: paperPDF,
            email: email,
            phoneNumber: phoneNumber,
            authors: authors,
        });

        // Display alert
        alert('Paper Has Been Successfully Submitted!');

        // Clear all fields
        setPaperTitle('');
        setPaperAbstract('');
        setPaperPDF('');
        setEmail('');
        setPhoneNumber('');
        setAuthors([]);
    };

    const handleAuthorChange = (index, field, value) => {
        const updatedAuthors = [...authors];
        updatedAuthors[index][field] = value;
        setAuthors(updatedAuthors);
    };

    const handleAddAuthor = () => {
        setAuthors([
            ...authors,
            {
                name: '',
                designation: '',
                university: '',
                email: '',
                mobileNumber: '',
            },
        ]);
    };

    return (
        <div className='register-container'>
            <div className='scrollable-form'>
                <div className='form'>
                    <input
                        type='text'
                        placeholder='Title of Paper'
                        value={paperTitle}
                        onChange={e => {
                            setPaperTitle(e.target.value);
                        }}
                        required
                    />
                    <input
                        type='text'
                        placeholder='Abstract of Paper'
                        value={paperAbstract}
                        onChange={e => {
                            setPaperAbstract(e.target.value);
                        }}
                        required
                    />
                    <input
                        type='file'
                        name='pdfFile'
                        accept='.pdf'
                        onChange={e => handleUpload(e)}
                        required
                    />
                    <input
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type='tel'
                        placeholder='Phone Number'
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
                        required
                    />
                    {authors.map((author, index) => (
                        <div key={index}>
                            <input
                                type='text'
                                placeholder={`Author ${index + 1} Name`}
                                value={author.name}
                                onChange={e =>
                                    handleAuthorChange(
                                        index,
                                        'name',
                                        e.target.value
                                    )
                                }
                                required
                            />
                            <input
                                type='text'
                                placeholder={`Author ${index + 1} Designation`}
                                value={author.designation}
                                onChange={e =>
                                    handleAuthorChange(
                                        index,
                                        'designation',
                                        e.target.value
                                    )
                                }
                                required
                            />
                            <input
                                type='text'
                                placeholder={`Author ${index + 1} University`}
                                value={author.university}
                                onChange={e =>
                                    handleAuthorChange(
                                        index,
                                        'university',
                                        e.target.value
                                    )
                                }
                                required
                            />
                            <input
                                type='email'
                                placeholder={`Author ${index + 1} Email`}
                                value={author.email}
                                onChange={e =>
                                    handleAuthorChange(
                                        index,
                                        'email',
                                        e.target.value
                                    )
                                }
                                required
                            />
                            <input
                                type='tel'
                                placeholder={`Author ${
                                    index + 1
                                } Mobile Number`}
                                value={author.mobileNumber}
                                onChange={e =>
                                    handleAuthorChange(
                                        index,
                                        'mobileNumber',
                                        e.target.value
                                    )
                                }
                                required
                            />
                        </div>
                    ))}
                    <button className='add-button' onClick={handleAddAuthor}>
                        Add Author
                    </button>
                    <button className='add-button' onClick={handleClick}>
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Register;
