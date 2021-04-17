import React from "react";
import {appMessages} from "./Messages/appMessages";

import ('./FlashMessage.css');

const FlashMessage = ({type}) => {

    return (
        <>
            <span className='app_message'>{appMessages[type]}</span>
        </>
    )
}

export default FlashMessage;