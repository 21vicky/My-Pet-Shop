import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="about-container">
      <div className="content-wrapper">
        <header className="about-header">
          <h1>About PetShop</h1>
          <p className="tagline">Cultivating Joy for Pets & Nature</p>
        </header>

        <section className="mission-section">
          <h2>Our Mission</h2>
          <p>
            At PetShop, we bridge the gap between domestic comfort and the wild spirit of nature. 
            Our mission is to provide sustainably sourced, high-quality products that celebrate 
            the unique bond between humans and their animal companions. We believe every wag, 
            purr, and chirp deserves a healthy, happy environment.
          </p>
        </section>

        <section className="values-section">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Compassion</h3>
              <p>
                We treat every living being with kindness and respect, ensuring our products support the well-being of your pets.
              </p>
            </div>
            <div className="value-card">
              <h3>Sustainability</h3>
              <p>
                Inspired by nature, we strive to minimize our paw print on the planet through eco-friendly practices.
              </p>
            </div>
            <div className="value-card">
              <h3>Community</h3>
              <p>
                We are more than a store; we are a pack of pet lovers dedicated to sharing knowledge and support.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About