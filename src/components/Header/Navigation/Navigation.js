import {Link} from 'react-router-dom';

import ('./Navigation.css');

const Navigation = () => {

    return (
        <div className='nav'>
            <Link className='navLink' to="/">HOME</Link>
            &nbsp;
            <Link className='navLink' to="/articles" >ALL ARTICLES</Link>
            &nbsp;
            <Link className='navLink' to="/articles/liked" >FAVORITE ARTICLES</Link>
            &nbsp;
            <Link className='navLink' to="/contact">CONTACT</Link>
            &nbsp;
            <Link className='navLink' to="/about">ABOUT</Link>
        </div>
    )
}

export default Navigation;