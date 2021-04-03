import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CheckOut.css';
const Checkout = () => {
    let {id} = useParams();
    const [products, setProducts] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/checkout/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data[0]))
    },[])
    console.log(id);
    console.log(products);
    return (
        <div className="selected-product">
            <div>
                <h1>Checkout Cart</h1>
            <div className="check-item">
                <h3>Product Name: <span>{products.name}</span> </h3>
                <h3>Product Price: <span>{products.price}</span></h3>
                <h3>Product Quantity: <span>1</span></h3>
                <h3>Total: <span>{products.price}</span></h3>
            </div>
            <button className="order-button">Order</button>
            </div>
            
        </div>
    );
};

export default Checkout;