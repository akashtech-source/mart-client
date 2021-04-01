import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header-container">
            
            <div className="title-name">
                <h1>SuperFood Village</h1>
            </div>
            <div className="nav-link">
                <nav>
                    <Link to="/home">Home</Link>
                    <Link to="/order">Order</Link>
                    <Link to="/admin">Admin</Link>
                    <Link to="/deals">Deals</Link>
                    <Link className="login-button" to="/login">Login</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;