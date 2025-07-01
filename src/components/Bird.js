import Peri from "../resource/flappy-peri.png"
import PropTypes from "prop-types";

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

Bird.propTypes = {
    birdPosition: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
    }).isRequired,
};

export default Bird;
