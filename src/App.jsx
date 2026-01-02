import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ProductDetail from './pages/ProductDetail'
import Products from './pages/Products'
import CareTips from './pages/CareTips'
import Checkout from './pages/Checkout'
import OrderConfirmation from './pages/OrderConfirmation'
import Login from './pages/login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import './App.css'
import './Theme.css'

function App() {
  const [cart, setCart] = useState([])
  const [orderData, setOrderData] = useState(null)
  const [theme, setTheme] = useState('light')
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id)
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId)
    } else {
      setCart(cart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      ))
    }
  }

  const placeOrder = (customerData) => {
    setOrderData({
      id: 'ORD-' + Date.now().toString(36).toUpperCase() + Math.random().toString(36).substring(2, 7).toUpperCase(),
      customer: customerData,
      items: cart,
      total: calculateTotal(),
      date: new Date().toLocaleDateString(),
      status: 'Confirmed'
    })
    setCart([])
  }

  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  }

  const toggleTheme = () => {
    setIsTransitioning(true)
    // Show spinner for 500ms, then switch theme
    setTimeout(() => {
      setTheme(prev => prev === 'light' ? 'dark' : 'light')
      // Keep spinner for the duration of the CSS transition (300ms)
      setTimeout(() => {
        setIsTransitioning(false)
      }, 300)
    }, 500)
  }

  return (
    <Router>
      {isTransitioning && (
        <div className="theme-transition-overlay">
          <div className="spinner"></div>
        </div>
      )}
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
      <Navigation cartCount={cart.length} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/products" element={<Products addToCart={addToCart} />} />
          <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
          <Route path="/care-tips" element={<CareTips />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/checkout"
            element={
              <Checkout
                cart={cart}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
                onPlaceOrder={placeOrder}
                total={calculateTotal()}
              />
            }
          />
          <Route
            path="/order-confirmation"
            element={<OrderConfirmation orderData={orderData} />}
          />
        </Routes>
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 PetShop. All rights reserved.</p>
        </div>
      </footer>
    </Router>
  )
}

export default App
