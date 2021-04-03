import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {UserContext} from '../../App';


const Login = () => {
    const [loggedinUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    var provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;
    var token = credential.accessToken;
    const {displayName, email} = result.user;
    const signedInUser = {name:displayName, email}
    setLoggedInUser(signedInUser);
    history.replace(from);
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    // ...
  });
    }
    return (
        <div>
        <div className="form-container">
            <h1>Sign In First</h1>
            <form action="">
                <div className="form-input">
                <input className="input-area" type="text" required placeholder="Enter Your Email"/>
                <br/>
                <input className="input-area" type="password" name="" id="" required placeholder="Enter Your Password"/>
                <br/>
                <input className="submit" type="submit" value="Sign In"/>
                </div>
                <p>Don't have an account? <Link to="/">Sign Up</Link> </p>
            </form>
        </div>
        
        <div className="alt-login">
        <h4>Or</h4>
            <button onClick={handleGoogleSignIn} className="google-login">Continue with Google</button>
            <br/>
            <button className="facebook-login">Continue with Facebook</button>
        </div>
        </div>
    );
};

export default Login;