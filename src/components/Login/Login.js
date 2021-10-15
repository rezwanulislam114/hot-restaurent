import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo2.png';
import './Login.css'

const Login = () => {
    const { loginUsingGoogle, loginWithEmailPassword, catchEmail, catchPassword } = useAuth();

    return (
        <>
            <div className="login-form">
                <img className="login-logo" src={logo} alt="" />
                <form>
                    <input onBlur={catchEmail} type="email" name="" id="email" placeholder="Email" />
                    <input onBlur={catchPassword} type="password" name="" id="password" placeholder="Password" />
                </form>
                <button onClick={loginWithEmailPassword}>Login</button>
                <hr />
                <button onClick={loginUsingGoogle}><i className="fab fa-google me-2"></i> Login With Google</button>
                <p className="mt-5">Haven't any accout? <Link to="signup">Sign Up here</Link></p>
            </div>
        </>
    );
};

export default Login;