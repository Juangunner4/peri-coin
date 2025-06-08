// Pipes.js

import React from "react";
import Pipe from "../resource/pipe.png";

const Pipesv2 = ({ pipePosition }) => {
    const { x, y, height } = pipePosition;

    return (
        <img
            src={Pipe}
            alt="pipesv2"
            className="pipesv2"
            style={{
                left: x,
                top: y,
                height: height,
            }}
            draggable={true}
        />
    );
};

export default Pipesv2;
