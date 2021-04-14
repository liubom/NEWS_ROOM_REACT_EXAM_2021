import React from "react";
import ('./Logout.css');

const Logout = (props) => {

    localStorage.removeItem('user');

    return (
        <h2>Logout Page</h2>
    )
}

export default Logout