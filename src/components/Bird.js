// Bird.js
import React from "react";
import Peri from "../resource/flappy-peri.png"

const Bird = ({ birdPosition }) => {

    return (
        <img
            src={Peri}
            alt="bird"
            className="bird"
            style={{
                left: birdPosition.x,
                top: birdPosition.y,
            }}
            draggable={true}
        />
    );
};

export default Bird;
