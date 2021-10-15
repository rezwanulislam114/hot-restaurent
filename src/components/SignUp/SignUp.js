import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo2.png'

const SignUp = () => {
    const { loginUsingGoogle, catchEmail, catchPassword, signUpWithEmailPassword } = useAuth();

    return (
        <>
            <div className="login-form">
                <img className="login-logo" src={logo} alt="" />
                <form>
                    <input type="text" name="" id="name" placeholder="Name" />
                    <input onBlur={catchEmail} type="email" name="" id="email" placeholder="Email" />
                    <input onBlur={catchPassword} type="password" name="" id="password" placeholder="Password" />
                    <input type="password" name="" id="re-password" placeholder="Confirm Password" />
                </form>
                <button onClick={signUpWithEmailPassword}>Sign Up</button>
                <hr />
                <button onClick={loginUsingGoogle}><i className="fab fa-google me-2"></i> Sign Up With Google</button>
                <p className="mt-5">Already have an accout? <Link to="login">Login here</Link></p>
            </div>
        </>
    );
};

export default SignUp;