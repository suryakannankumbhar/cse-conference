import React, { useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { txtDB } from '../conferenceConfig';
import './RegistrationData.css';

function RegistrationData() {
    const [password, setPassword] = useState('');
    const [authenticated, setAuthenticated] = useState(false);
    const [registrationData, setRegistrationData] = useState([]);

    const handlePasswordChange = event => {
        setPassword(event.target.value);
    };

    const handleLogin = async () => {
        // Authenticate the user here, for demonstration purpose, I am using a simple password check
        if (password === 'niet123') {
            // Replace 'your_password_here' with your actual password
            // Fetch registration data if authentication succeeds
            const dataRef = collection(txtDB, 'ConferenceData');
            const snapshot = await getDocs(dataRef);
            const data = snapshot.docs.map(doc => doc.data());
            setRegistrationData(data);
            setAuthenticated(true);
        } else {
            alert('Incorrect password. Please try again.');
        }
    };

    return (
        <div className='registration-container'>
            {!authenticated && (
                <div className='login-container'>
                    <h1 className='login-title'>Enter Passcode</h1>
                    <input
                        type='password'
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder='Passcode'
                    />
                    <button onClick={handleLogin}>Login</button>
                </div>
            )}
            {authenticated && (
                <>
                    <h1 className='registration-title'>Registration Data</h1>
                    <div className='registration-table-container'>
                        <table className='registration-table'>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Abstract</th>
                                    <th>PDF URL</th>
                                    <th>Email</th>
                                    <th>Phone Number</th>
                                    <th>Authors</th>
                                </tr>
                            </thead>
                            <tbody>
                                {registrationData.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.paperTitle}</td>
                                        <td>{item.paperAbstract}</td>
                                        <td>
                                            <a
                                                href={item.pdfURL}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                Download PDF
                                            </a>
                                        </td>
                                        <td>{item.email}</td>
                                        <td>{item.phoneNumber}</td>
                                        <td>
                                            <ul className='authors'>
                                                {item.authors &&
                                                    item.authors.map(
                                                        (author, index) => (
                                                            <li key={index}>
                                                                <div>
                                                                    <strong>
                                                                        Author{' '}
                                                                        {index +
                                                                            1}
                                                                        :
                                                                    </strong>
                                                                </div>
                                                                <div>
                                                                    <strong>
                                                                        Name:
                                                                    </strong>{' '}
                                                                    {
                                                                        author.name
                                                                    }
                                                                </div>
                                                                <div>
                                                                    <strong>
                                                                        Designation:
                                                                    </strong>{' '}
                                                                    {
                                                                        author.designation
                                                                    }
                                                                </div>
                                                                <div>
                                                                    <strong>
                                                                        University:
                                                                    </strong>{' '}
                                                                    {
                                                                        author.university
                                                                    }
                                                                </div>
                                                                <div>
                                                                    <strong>
                                                                        Email:
                                                                    </strong>{' '}
                                                                    {
                                                                        author.email
                                                                    }
                                                                </div>
                                                                <div>
                                                                    <strong>
                                                                        Mobile
                                                                        Number:
                                                                    </strong>{' '}
                                                                    {
                                                                        author.mobileNumber
                                                                    }
                                                                </div>
                                                            </li>
                                                        )
                                                    )}
                                            </ul>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )}
        </div>
    );
}

export default RegistrationData;
