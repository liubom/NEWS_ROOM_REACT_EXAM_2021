import {Link} from 'react-router-dom';
import Login from "./Login/Login";
import Logout from "./Logout/Logout";
import Welcome from "./Welcome/Welcome";
import InfoDot from "../InfoDot/InfoDot";

import ('./Navigation.css');

const Navigation = (props) => {

    const currentUser = localStorage.getItem('user');

    if (currentUser) {
        return (
            <div className='nav'>
                <Link className='navLink' to="/">ALL ARTICLES</Link>
                &nbsp;
                <Link className='navLink' to="/liked">FAVORITE ARTICLES</Link>
                <InfoDot likedIDs={props.likedIDs}/>
                &nbsp;
                <Link className='navLink' to="/search">SEARCH</Link>
                &nbsp;
                <Link className='navLink' to="/contact">CONTACT</Link>
                &nbsp;
                <Link className='navLink' to="/about">ABOUT</Link>
                &nbsp;
                {currentUser ? <Welcome user={currentUser}/> : ''}
                <Link className='navLink' to='/'><Logout logoutUser={props.logoutUser}/></Link>
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
            <Link className='navLink' to='/'><Login setLoginUser={props.setLoginUser}/></Link>
            &nbsp;
        </div>
    )
}

export default Navigation;