import React from "react";
import {appMessages} from "./Messages/appMessages";

import ('./FlashMessage.css');

const FlashMessage = ({type}) => {

    return (
        <>
            {appMessages[type]}
        </>
    )
}

export default FlashMessage;