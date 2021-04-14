import React from "react";
import ('./Logout.css');

const Logout = (props) => {

    return (
        <>
            <button onClick={props.logoutUser} className='logout'>LOGOUT</button>
        </>
    );
}

export default Logout;