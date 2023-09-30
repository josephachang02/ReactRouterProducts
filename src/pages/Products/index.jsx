import React from 'react'
import { useState, useEffect } from 'react';

const Products = () => {

  const [productItems, setProductItems] = useState([]);
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const addProduct = () => {
    
    const newProduct = {
      name: productName,
      description: productDescription,
      price: productPrice
    };

    // Add the new product to the products state
    setProductItems([...productItems, newProduct]);

    setProductName('');
    setProductDescription('');
    setProductPrice('');
  };

  useEffect(() => {
    console.log('A new product has been added!');
    console.log('Updated products state:', productItems);
  }, [productItems]);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(); // Call the addProduct function when the form is submitted
  };
 
  return (
    <div>
      <h1>Product List</h1>
      
      {/* Form to add a new product */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="productDescription">Product Description:</label>
          <input
            type="text"
            id="productDescription"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="productPrice">Product Price:</label>
          <input
            type="number"
            id="productPrice"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Product</button>
      </form>

      
      <div>
        <h2>Products:</h2>
        <ul>
          {productItems.map((product, index) => (
            <li key={index}>
              <strong>Name:</strong> {product.name},{' '}
              <strong>Description:</strong> {product.description},{' '}
              <strong>Price:</strong> {product.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Products