import { Link } from 'react-router-dom'
import './Navigation.css'

export default function Navigation({ cartCount }) {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo">
          <Link to="/"> 🐾 style PetShop</Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>
            <Link to="/checkout" className="cart-link">
              🛒 Cart ({cartCount})
            </Link>
          </li>
          <li>
            <Link to="/login" className="login-link">
              Login
            </Link>
          </li>
          
          </ul>
      </div>
    </nav>
  )
}


