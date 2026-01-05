import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const ForgotPassword = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>Reset Password</h2>
          <p>Enter your email to receive instructions</p>
        </div>
        
        <form>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="text" id="email" placeholder="Enter your registered email" />
          </div>
          
          <button type="submit" className="login-btn">
            Send Reset Link
          </button>
          
          <div className="login-footer">
            <Link to="/login">Back to Sign In</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword