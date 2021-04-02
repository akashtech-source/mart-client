import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CheckOut.css';
const Checkout = () => {
    let {id} = useParams();
    const [products, setProducts] = useState({})
    useEffect(() => {
        const url = `https://sleepy-sands-03275.herokuapp.com/checkout/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data[0]))
    },[])
    console.log(id);
    console.log(products);
    return (
        <div className="selected-product">
            <div>
                <h1>Checkout Page</h1>
            <h3>Product Name: {products.name}</h3>
            <h3>Product Price: {products.price}</h3>
            <h3>Product Quantity: 1</h3>
            <button className="search-button">Order</button>
            </div>
            
        </div>
    );
};

export default Checkout;