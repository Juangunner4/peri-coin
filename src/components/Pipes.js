// Pipes.js

import React from "react";
import Pipe from "../resource/pipe.png";

const Pipes = ({ pipePosition }) => {
    return (
        <img
            src={Pipe}
            alt="pipe"
            className="pipe"
            style={{
                left: pipePosition.x,
                top: pipePosition.y,
            }}
            draggable={true}
        />
    );
};

export default Pipes;