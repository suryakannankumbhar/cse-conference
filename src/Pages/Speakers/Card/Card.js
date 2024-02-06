// Card.js

import React from 'react';
import classNames from 'classnames';
import '.././Card.css';

const Card = ({ data }) => {
    const { image, name, description } = data;

    // Use classNames to generate dynamic class names
    const cardClass = classNames('card', {
        // Add more conditional class names if needed
    });

    return (
        <div className={cardClass}>
            <img src={image} alt={name} />
            <div className='card-content'>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Card;
