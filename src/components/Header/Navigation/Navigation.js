import {Link} from 'react-router-dom';
import React from "react";

import ('./Navigation.css');

const Navigation = (props) => {

    const currentUser = localStorage.getItem('user');

    if (currentUser) {
        return (
            <div className='nav'>
                <Link className='navLink' to="/">ALL ARTICLES</Link>
                &nbsp;
                <Link className='navLink' to="/liked">FAVORITE ARTICLES</Link>
                &nbsp;
                <Link className='navLink' to="/contact">CONTACT</Link>
                &nbsp;
                <Link className='navLink' to="/about">ABOUT</Link>
                &nbsp;
                <button onClick={props.logoutUser}>LOGOUT</button>
                &nbsp;
            </div>
        )
    }

    return (
        <div className='nav'>
            <Link className='navLink' to="/">ALL ARTICLES</Link>
            &nbsp;
            <Link className='navLink' to="/contact">CONTACT</Link>
            &nbsp;
            <Link className='navLink' to="/about">ABOUT</Link>
            &nbsp;
            <button onClick={props.setLoginUser}>LOGIN</button> <input type='text' placeholder='Enter your username...'/>
            &nbsp;
        </div>
    )
}

export default Navigation;