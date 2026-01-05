import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = ({ addToCart }) => {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to PetShop</h1>
          <p>Everything your furry friend needs, all in one place.</p>
          <Link to="/about" className="cta-button">Explore Our World</Link>
        </div>
      </section>

      <div className="sections-grid">
        <div className="info-card">
          <div className="card-image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80')"}}></div>
          <div className="card-content">
            <h3>Pet Adoption</h3>
            <p>Ready to expand your family? Discover pets waiting for their forever homes and find your perfect match today.</p>
            <Link to="/products" className="card-link">Meet the Pets &rarr;</Link>
          </div>
        </div>

        <div className="info-card">
          <div className="card-image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80')"}}></div>
          <div className="card-content">
            <h3>Care Tips</h3>
            <p>From nutrition to grooming, get expert advice on how to keep your companions happy, healthy, and thriving.</p>
            <Link to="/care-tips" className="card-link">Read Tips &rarr;</Link>
          </div>
        </div>

        <div className="info-card">
          <div className="card-image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=800&q=80')"}}></div>
          <div className="card-content">
            <h3>Community</h3>
            <p>Join our vibrant community of pet lovers. Share stories, photos, and connect with others who share your passion.</p>
            <Link to="/contact" className="card-link">Join Us &rarr;</Link>
          </div>
        </div>
      </div>
      
      {/* Placeholder for where products might go if needed, keeping addToCart prop valid */}
      {/* <div style={{textAlign: 'center', padding: '2rem', color: '#8b5e3c'}}>
        <h2>Featured Products Coming Soon!</h2>
      </div> */}
    </div>
  )
}

export default Home