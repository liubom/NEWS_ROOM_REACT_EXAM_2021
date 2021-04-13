import React from "react";
import ('./Footer.css');

const Footer = () => {

    // const getDate = () => {
    //     let now = new Date;
    //     return now.getFullYear();
    // }

    return (
        <div className='mainFooter'>
            News-Room.info &copy;
            {/*<span>{getDate()}</span>*/}
        </div>
    )
}

export default Footer;