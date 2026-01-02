import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const Register = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>Create Account</h2>
          <p>Join our community of pet lovers</p>
        </div>
        
        <form>
          <div className="form-group">
            <label htmlFor="fullname">Full Name</label>
            <input type="text" id="fullname" placeholder="Enter your full name" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="text" id="email" placeholder="Enter your email" />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Create a password" />
          </div>

          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" placeholder="Confirm your password" />
          </div>
          
          <button type="submit" className="login-btn">
            Sign Up
          </button>
          
          <div className="login-footer">
            <p>Already have an account? <Link to="/login">Sign In</Link></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register