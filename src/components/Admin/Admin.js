import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';
const Admin = () => {
    return (
        <div className="inventory">
        <div className="admin-container">
            <Link to="/home"><h1>SuperFood Village</h1></Link>
            <div className="manage">
                <h3 className="manage-product product">Manage Product</h3>
             <h3 className="add-product product">Add Product</h3>
                <h3 className="edit-product product">Edit Product</h3>

            </div>
        </div>
        <div className="upload-container">
            <form action="">
                <input className="input-area name" type="text" placeholder="Product Name"/>
                <br/>
                <input className="input-area price" type="text" placeholder="Price"/>
                <input className="input-area weight" type="text" placeholder="Weight"/>
                <input className="file" type="file" name="" id=""/>
                <br/>
                <input className="save-button" type="submit" value="Save"/>
            </form>
        </div>
        
        </div>
    );
};

export default Admin;