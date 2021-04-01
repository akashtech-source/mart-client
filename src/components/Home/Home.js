import React from 'react';
import Header from '../Header/Header';
import './Home.css';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="search-field">
                <input className="input-search" placeholder="Search an item" type="text"/>
                <button className="search-button">Search</button>
            </div>
        </div>
    );
};

export default Home;