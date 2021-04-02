import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './Admin.css';

const Admin = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const [imageURL, setImageURL] = useState(null);
    const onSubmit = data => {
        const productData = {
            name: data.name,
            price: data.price,
            imageURL: imageURL
        }
        const url = `http://localhost:5000/admin`;

        
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then(res => console.log('server side', res))
    }

    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'e2af7f76ded15db0cbb2784297dce77d');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
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
        <form onSubmit={handleSubmit(onSubmit)}>
      <input name="name" defaultValue="Add Product" ref={register} />
      <br/>
      <input name="price" defaultValue="Price" type="text" ref={register}/>
      <input name="exampleRequired" type="file" onChange={handleImageUpload} />
      <br/>
      <input type="submit" />
    </form>
        </div>
        
        </div>
    );
};

export default Admin;