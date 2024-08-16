import React, { useState } from 'react';
import axios from 'axios';
import './AddProduct.css'; 

const AddProduct = () => {
    const [product, setProduct] = useState({
        productId: '',
        brand: '',
        type: '',
        description: '',
        mrp: '',
        price: '',
        image: ''
    });

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        fetch("http://localhost:8080/postProduct", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product)
        }).then(() => {
            alert('Product added successfully!');
            setProduct({
                productId: '',
                brand: '',
                type: '',
                description: '',
                mrp: '',
                price: '',
                image: ''
            });
            
        })
    };

    return (
        <div className="admin-container">
            <h3>Add Product</h3>
            <form onSubmit={handleSubmit} className="product-form">
                <div className="form-group">
                    <label>Product ID:</label>
                    <input
                        type="text"
                        name="productId"
                        value={product.productId}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Brand:</label>
                    <input
                        type="text"
                        name="brand"
                        value={product.brand}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Type:</label>
                    <input
                        type="text"
                        name="type"
                        value={product.type}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>MRP:</label>
                    <input
                        type="number"
                        name="mrp"
                        value={product.mrp}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Price:</label>
                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Image Url:</label>
                    <input
                        type="text"
                        name="image"
                        value={product.image}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='add-product-actions'>
                    <button type="submit" className="actions-buttons">Cancel</button>
                    <button type="submit" className="actions-buttons">Add Product</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;
