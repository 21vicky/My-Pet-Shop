import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <header className="contact-header">
          <h1>Get in Touch</h1>
          <p>Have a question? We'd love to hear from your pack!</p>
        </header>
        
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Owner's Name</label>
            <input type="text" id="name" placeholder="John Doe" />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="john@example.com" />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              rows="5" 
              placeholder="Tell us about your furry friend..."
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            <span>Send Woof</span>
            <span className="paw-icon">🐾</span>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact