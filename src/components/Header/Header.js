import React from "react";
import Navigation from "./Navigation/Navigation";
import ('./Header.css');

const Header = (props) => {

    return (
        <>
            <div className='mainHeader'>
                <Navigation setLoginUser={props.setLoginUser} logoutUser={props.logoutUser} likedIDs={props.likedIDs} isWrong={props.isWrong}/>
                <div className='siteLogo'>News Room</div>
            </div>
        </>
    )
}

export default Header;