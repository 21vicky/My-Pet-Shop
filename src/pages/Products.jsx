import React from 'react'
import { Link } from 'react-router-dom'
import { PRODUCTS } from './ProductDetail'
import './Products.css'

const Products = ({ addToCart }) => {
  return (
    <div className="products-container">
      <h1>Meet Our Pets</h1>
      <div className="products-grid">
        {PRODUCTS.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
               <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="breed">{product.breed}</p>
              <p className="price">₹{product.price.toLocaleString('en-IN')}</p>
              <div className="product-actions">
                <Link to={`/product/${product.id}`} className="btn-details">View Details</Link>
                <button onClick={() => addToCart(product)} className="btn-add-cart">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products