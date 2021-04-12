import React from "react";
import {BrowserRouter as Router, Switch, Route, Link, useRouteMatch} from 'react-router-dom';

import ('./Navigation.css');

const Navigation = () => {

    return (
        <div className='nav'>
            <Link className='navLink' to="/">Home</Link>
            &nbsp;
            <Link className='navLink' to="/articles" >Articles</Link>
            &nbsp;
            <Link className='navLink' to="/contact">Contact</Link>
            &nbsp;
            <Link className='navLink' to="/about">About</Link>
        </div>
    )
}

export default Navigation;