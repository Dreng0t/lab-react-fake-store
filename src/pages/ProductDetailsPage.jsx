import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

function ProductDetailsPage(props) {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();


  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((e) => console.log('Error getting characters from the api...', e));
  }, []);


  return (
    <div className="ProductDetailsPage">
      {/* Render product details here */}
      <p>Title: {product.title}</p>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <p>Category: {product.category}</p>
      <img src={product.image} alt="Product image" />
      <h4>Rating:</h4>
      <p>Rate: {product.rating ? product.rating.rate : 'N/A'}</p>
      <p>Count: {product.rating ? product.rating.count : 'N/A'}</p>

      <p>
        <Link to="/" className="btn btn-primary">Back</Link>
      </p>
    </div>
  );
}

export default ProductDetailsPage;
