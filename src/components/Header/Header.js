import React from "react";
import Navigation from "./Navigation/Navigation";
import ('./Header.css');

const Header = () => {

    return (
        <div className='mainHeader'>
            <Navigation/>
            <div className='siteLogo'>News Room</div>
        </div>
    )
}

export default Header;