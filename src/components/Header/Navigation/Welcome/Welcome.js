import React from "react";
import ('./Welcome.css');

const Welcome = (props) => {

    return (
        <span>
            WELCOME <span className='welcomeName'>{props.user}</span>
        </span>
    );
}

export default Welcome;