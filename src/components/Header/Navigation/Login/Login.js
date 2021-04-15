import React, {useState} from "react";

import ('./Login.css');

const Login = (props) => {

    const [state, setState] = useState();

    const inputSet = (value) => {
        return value.toUpperCase();
    }

    const logUser = (value) => {
        return props.setLoginUser(value);
    }

    return (
        <>
            <button onClick={(e) => {
                logUser(e.currentTarget.nextElementSibling.value);
            }} className='login'>LOGIN
            </button>
            <input onChange={(e) => {
                e.currentTarget.value = inputSet(e.currentTarget.value);
            }} type='text' placeholder='ENTER USERNAME' className='login'/><span>Min 5 characters</span>
        </>
    );
}

export default Login;