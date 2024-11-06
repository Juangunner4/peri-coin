import React from 'react';
import groundImage from '../resource/ground.png'; // Replace with the correct path to your image

const Ground = () => {
    return (
        <div className="ground">
            <img src={groundImage} alt="Ground" className="ground-image" />
        </div>
    );
};

export default Ground;
