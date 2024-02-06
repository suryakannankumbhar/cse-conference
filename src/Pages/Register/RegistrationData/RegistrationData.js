import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { txtDB } from '../conferenceConfig';
import './RegistrationData.css';

function RegistrationData() {
    const [registrationData, setRegistrationData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const dataRef = collection(txtDB, 'ConferenceData');
            const snapshot = await getDocs(dataRef);
            const data = snapshot.docs.map(doc => doc.data());
            setRegistrationData(data);
        };

        fetchData();
    }, []);

    return (
        <div className='registration-container'>
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
                                                                {index + 1}:
                                                            </strong>
                                                        </div>
                                                        <div>
                                                            <strong>
                                                                Name:
                                                            </strong>{' '}
                                                            {author.name}
                                                        </div>
                                                        <div>
                                                            <strong>
                                                                Designation:
                                                            </strong>{' '}
                                                            {author.designation}
                                                        </div>
                                                        <div>
                                                            <strong>
                                                                University:
                                                            </strong>{' '}
                                                            {author.university}
                                                        </div>
                                                        <div>
                                                            <strong>
                                                                Email:
                                                            </strong>{' '}
                                                            {author.email}
                                                        </div>
                                                        <div>
                                                            <strong>
                                                                Mobile Number:
                                                            </strong>{' '}
                                                            {
                                                                author.mobileNumber
                                                            }
                                                        </div>
                                                        <br />
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
        </div>
    );
}

export default RegistrationData;
