// Pipes.js

import React from "react";
import Pipe from "../resource/pipesv2.png";

const Pipesv2 = ({ pipePosition }) => {
    return (
        <img
            src={Pipe}
            alt="pipesv2"
            className="pipesv2"
            style={{
                left: pipePosition.x,
                top: pipePosition.y,
            }}
            draggable={true}
        />
    );
};

export default Pipesv2;