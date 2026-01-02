import { useState } from 'react'
import { Link } from 'react-router-dom'
import './ProductList.css'

const PRODUCTS = [
  { id: 1, name: 'Golden Retriever', price: 35000, image: 'images/golden-retriever.jpg', description: 'Friendly and energetic golden retriever' },
  { id: 2, name: 'Persian Cat', price: 25000, image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&q=80', description: 'Beautiful and calm Persian cat' },
  { id: 3, name: 'Budgie', price: 5000, image: 'images/budgie.jpg', description: 'Colorful and talkative budgie' },
  { id: 4, name: 'Rabbit', price: 6000, image: 'images/rabbit.jpg', description: 'Cute and fluffy rabbit' },
  { id: 5, name: 'Hamster', price: 2000, image: 'images/hamster.jpg', description: 'Small and adorable hamster' },
  { id: 6, name: 'Turtle', price: 10000, image: 'images/turtle.jpg', description: 'Long-living turtle pet' },
  { id: 7, name: 'Labrador', price: 32000, image: '/images/labrador.jpg', description: 'Loyal and friendly labrador' },
  { id: 8, name: 'Siamese Cat', price: 22000, image: '/images/siamese-cat.jpg', description: 'Elegant and vocal Siamese cat' },
  { id: 9, name: 'Cockatiel', price: 4500, image: '/images/cockatiel.jpg', description: 'Playful cockatiel with crest' },
  { id: 10, name: 'Guinea Pig', price: 2500, image: '/images/guinea-pig.jpg', description: 'Gentle and social guinea pig' },
  { id: 11, name: 'Ferret', price: 8000, image: '/images/ferret.jpg', description: 'Curious and mischievous ferret' },
  { id: 12, name: 'Goldfish', price: 700, image: '/images/goldfish.jpg', description: 'Easy-care goldfish' },
]

export default function ProductList({ addToCart }) {
  const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    <div className="products-section">
      <h1>Our Pets</h1>
      <p className="section-subtitle">Choose from our wide variety of pets</p>
      
      <div className="products-grid">
        {PRODUCTS.map(product => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`} className="product-link">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p className="product-desc">{product.description}</p>
              <p className="product-price">₹{product.price.toLocaleString('en-IN')}</p>
            </Link>
            <button
              className="btn-add-cart"
              onClick={() => {
                addToCart(product)
                setSelectedProduct(product.id)
                setTimeout(() => setSelectedProduct(null), 1000)
              }}
            >
              {selectedProduct === product.id ? '✓ Added!' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
