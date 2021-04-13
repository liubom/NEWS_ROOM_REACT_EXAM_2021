import {Link} from 'react-router-dom';
import React from "react";

import ('./Navigation.css');

const Navigation = () => {

    const currentUser = localStorage.getItem('user');

    if (currentUser) {
        return (
            <div className='nav'>
                <Link className='navLink' to="/" >ALL ARTICLES</Link>
                &nbsp;
                <Link className='navLink' to="/articles/liked" >FAVORITE ARTICLES</Link>
                &nbsp;
                <Link className='navLink' to="/contact">CONTACT</Link>
                &nbsp;
                <Link className='navLink' to="/about">ABOUT</Link>
            </div>
        )
    }

    return (
        <div className='nav'>
            <Link className='navLink' to="/" >ALL ARTICLES</Link>
            &nbsp;
            <Link className='navLink' to="/contact">CONTACT</Link>
            &nbsp;
            <Link className='navLink' to="/about">ABOUT</Link>
            &nbsp;
            <Link className='navLink' to="/login">LOGIN</Link>
            &nbsp;
        </div>
    )


}

export default Navigation;