import React from "react";
import ('./Login.css');


const Login = (props) => {

    localStorage.setItem('user', 'liubo');

   return (
       <h2>Login Page</h2>
   )
}

export default Login;