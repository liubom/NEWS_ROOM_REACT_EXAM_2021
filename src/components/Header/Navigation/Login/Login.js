import React from "react";
import LogMessage from "./LogMessage/LogMessage";

import ('./Login.css');

const Login = (props) => {

    const {setLoginUser} = props


    const logUser = (value) => {
        return setLoginUser(value);
    }

    return (
        <>
            <button onClick={(e) => {
                logUser(e.currentTarget.nextElementSibling.value);
            }} className='login'>LOGIN
            </button>
            <input onChange={(e) => {
                e.currentTarget.value = (e.currentTarget.value).toUpperCase();
            }} type='text' placeholder='ENTER USERNAME' className='login'/><span>Min 5 characters</span>
        </>
    );
}

export default Login;