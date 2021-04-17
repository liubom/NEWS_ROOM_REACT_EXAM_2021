import {useState} from "react";

import ('./LogMessage.css');

const LogMessage = ({msg}) => {

    return (
        <>
            <span className='logMessage'>{msg}</span>
        </>
    )
}

export default LogMessage;