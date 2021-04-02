import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {name, price, imageURL, _id} = props.product;
    return (
        <div className="main-container">
        <div className="product-container">
            <div className="single-product">
            <img src={imageURL} alt=""/>
            <h3>{name}</h3>
            <h4>{price}</h4>
            <Link to={`/checkout/${_id}`} className="buy-button">Buy Now</Link>
            </div>
        </div>
        </div>
    );
};

export default Product;