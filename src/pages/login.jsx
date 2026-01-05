import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>Sign In</h2>
          <p>Welcome back to PetShop</p>
        </div>
        
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Enter your username" />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>

          <div className="form-actions">
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
          
          <button type="submit" className="login-btn">
            Sign In
          </button>
          
          <div className="login-footer">
            <p>Don't have an account? <Link to="/register">Create Account</Link></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login