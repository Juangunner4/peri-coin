// Pipes.js

import React from "react";
import Pipe from "../resource/pipesv3.png";

const Pipesv3 = ({ pipePosition }) => {
    const { x, y, height } = pipePosition;

    return (
        <img
            src={Pipe}
            alt="pipesv3"
            className="pipesv3"
            style={{
                left: x,
                top: y,
                height: height,
            }}
            draggable={false}
        />
    );
};

export default Pipesv3;
