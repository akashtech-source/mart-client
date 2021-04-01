import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
const Login = () => {
    return (
        <div>
        <div className="form-container">
            <h1>Login to Continue</h1>
            <form action="">
                <div className="form-input">
                <input className="input-area" type="text" required placeholder="Enter Your Email"/>
                <br/>
                <input className="input-area" type="password" name="" id="" required placeholder="Enter Your Password"/>
                <br/>
                <input className="submit" type="submit" value="Log in"/>
                </div>
                <p>Don't have an account? <Link to="/">Sign Up</Link> </p>
            </form>
        </div>
        
        <div className="alt-login">
        <h4>Or</h4>
            <button className="google-login">Continue with Google</button>
            <br/>
            <button className="facebook-login">Continue with Facebook</button>
        </div>
        </div>
    );
};

export default Login;