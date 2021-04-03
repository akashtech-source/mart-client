import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header-container">
            
            <div className="website-title">
                <h1>SunRise <span>MarT</span></h1>
            </div>
            <div className="nav-bar">
                <nav>
                    <Link to="/home">Home</Link>
                    <Link to="/admin">Admin</Link>
                    <Link to="/deals">Offers</Link>
                    <Link className="login-button" to="/login">Sign In</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;