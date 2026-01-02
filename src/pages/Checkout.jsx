import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Checkout.css'

export default function Checkout({ cart, removeFromCart, updateQuantity, onPlaceOrder, total }) {
  const navigate = useNavigate()
  const [customerData, setCustomerData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: ''
  })
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}

    if (!customerData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }
    if (!customerData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }
    if (!customerData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!customerData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^\d{10}$/.test(customerData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number'
    }
    if (!customerData.address.trim()) {
      newErrors.address = 'Address is required'
    }
    if (!customerData.city.trim()) {
      newErrors.city = 'City is required'
    }
    if (!customerData.zipCode.trim()) {
      newErrors.zipCode = 'Zip code is required'
    } else if (!/^\d{6}$/.test(customerData.zipCode)) {
      newErrors.zipCode = 'Please enter a valid 6-digit zip code'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setCustomerData(prev => ({
      ...prev,
      [name]: value
    }))
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleCheckout = (e) => {
    e.preventDefault()
    if (cart.length === 0) {
      alert('Your cart is empty!')
      return
    }
    
    if (validateForm()) {
      onPlaceOrder(customerData)
      navigate('/order-confirmation')
    }
  }

  if (cart.length === 0 && !customerData.firstName) {
    return (
      <div className="container checkout-page">
        <h1>Shopping Cart</h1>
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <p>Start shopping to add pets to your cart!</p>
        </div>
      </div>
    )
  }

  const shippingCost = 500
  const taxRate = 0.1

  return (
    <div className="container checkout-page">
      <h1>Checkout</h1>
      
      <div className="checkout-container">
        <div className="cart-items-section">
          <h2>Order Summary</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              <div className="cart-items">
                {cart.map(item => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} className="item-image" />
                    <div className="item-details">
                      <h3>{item.name}</h3>
                      <p className="item-price">₹{item.price.toLocaleString('en-IN')}</p>
                    </div>
                    <div className="item-quantity">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                        min="1"
                      />
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <div className="item-total">₹{(item.price * item.quantity).toLocaleString('en-IN')}</div>
                    <button
                      className="btn-remove"
                      onClick={() => removeFromCart(item.id)}
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="cart-summary">
                <div className="summary-row">
                  <span>Subtotal:</span>
                  <span>₹{total.toLocaleString('en-IN')}</span>
                </div>
                <div className="summary-row">
                  <span>Shipping:</span>
                  <span>₹{shippingCost.toLocaleString('en-IN')}</span>
                </div>
                <div className="summary-row">
                  <span>Tax (10%):</span>
                  <span>₹{Math.round(total * taxRate).toLocaleString('en-IN')}</span>
                </div>
                <div className="summary-row total-row">
                  <span>Total:</span>
                  <span>₹{(total + shippingCost + Math.round(total * taxRate)).toLocaleString('en-IN')}</span>
                </div>
              </div>
            </>
          )}
        </div>

        <form className="checkout-form" onSubmit={handleCheckout}>
          <h2>Shipping Information</h2>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={customerData.firstName}
                onChange={handleChange}
                placeholder="Enter first name"
                className={errors.firstName ? 'input-error' : ''}
              />
              {errors.firstName && <span className="error-message">{errors.firstName}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name *</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={customerData.lastName}
                onChange={handleChange}
                placeholder="Enter last name"
                className={errors.lastName ? 'input-error' : ''}
              />
              {errors.lastName && <span className="error-message">{errors.lastName}</span>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={customerData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={customerData.phone}
              onChange={handleChange}
              placeholder="10-digit phone number"
              className={errors.phone ? 'input-error' : ''}
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="address">Address *</label>
            <input
              type="text"
              id="address"
              name="address"
              value={customerData.address}
              onChange={handleChange}
              placeholder="Street address"
              className={errors.address ? 'input-error' : ''}
            />
            {errors.address && <span className="error-message">{errors.address}</span>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="city">City *</label>
              <input
                type="text"
                id="city"
                name="city"
                value={customerData.city}
                onChange={handleChange}
                placeholder="City name"
                className={errors.city ? 'input-error' : ''}
              />
              {errors.city && <span className="error-message">{errors.city}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="zipCode">Zip Code *</label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={customerData.zipCode}
                onChange={handleChange}
                placeholder="6-digit code"
                className={errors.zipCode ? 'input-error' : ''}
              />
              {errors.zipCode && <span className="error-message">{errors.zipCode}</span>}
            </div>
          </div>

          <button type="submit" className="btn-place-order" disabled={cart.length === 0}>
            Place Order
          </button>
        </form>
      </div>
    </div>
  )
}
