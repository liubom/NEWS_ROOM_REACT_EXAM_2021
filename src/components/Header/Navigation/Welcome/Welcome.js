import React from "react";
import ('./Welcome.css');

const Welcome = (props) => {

    return (
        <span>
            WELCOME {props.user}
        </span>
    );
}

export default Welcome;