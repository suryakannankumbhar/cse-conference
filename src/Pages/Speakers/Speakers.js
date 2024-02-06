// App.js

import React from 'react';
import Card from './Card/Card';

//image imports
import trusteeImage from './images/trustee.jpg';
import ceoImage from './images/ceo.jpg';
import principalImage from './images/principal.jpg';

// speaker data
const data = [
    {
        image: trusteeImage,
        name: 'ABC',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },

    {
        image: ceoImage,
        name: 'XYZ',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },

    {
        image: trusteeImage,
        name: 'ABC',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
];

const Speakers = () => {
    return (
        <div>
            <h2 className='heading'>SPEAKERS</h2>
            <div className='card-container'>
                {data.map((item, index) => (
                    <Card key={index} data={item} />
                ))}
            </div>
        </div>
    );
};

export default Speakers;
