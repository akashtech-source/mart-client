import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Product from '../Product/Product';
import './Home.css';
const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://sleepy-sands-03275.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div>
            <Header></Header>
            <div className="search-field">
                <input className="input-search" placeholder="Search an item" type="text"/>
                <button className="search-button">Search</button>
            </div>
            {
                products.map(product => <Product product={product}></Product>)
            }
        </div>
    );
};

export default Home;