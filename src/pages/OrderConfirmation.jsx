import { Link } from 'react-router-dom'
import './OrderConfirmation.css'

export default function OrderConfirmation({ orderData }) {
  if (!orderData) {
    return (
      <div className="container order-confirmation-page">
        <div className="no-order">
          <h1>No Order Found</h1>
          <p>Please place an order first</p>
          <Link to="/" className="btn-home">Continue Shopping</Link>
        </div>
      </div>
    )
  }

  const shippingCost = 500
  const taxRate = 0.1

  return (
    <div className="container order-confirmation-page">
      <div className="confirmation-card">
        <div className="success-header">
          <div className="success-icon">✓</div>
          <h1>Order Confirmed!</h1>
          <p>Thank you for your purchase</p>
        </div>

        <div className="order-details">
          <div className="detail-row">
            <span>Order Number:</span>
            <span className="order-id">{orderData.id}</span>
          </div>
          <div className="detail-row">
            <span>Order Date:</span>
            <span>{orderData.date}</span>
          </div>
          <div className="detail-row">
            <span>Status:</span>
            <span className="status">{orderData.status}</span>
          </div>
        </div>

        <h2>Customer Information</h2>
        <div className="customer-info">
          <p><strong>{orderData.customer.firstName} {orderData.customer.lastName}</strong></p>
          <p>Email: {orderData.customer.email}</p>
          <p>Phone: {orderData.customer.phone}</p>
          <p>Address: {orderData.customer.address}, {orderData.customer.city} {orderData.customer.zipCode}</p>
        </div>

        <h2>Order Items</h2>
        <div className="order-items">
          {orderData.items.map(item => (
            <div key={item.id} className="order-item">
              <img src={item.image} alt={item.name} className="order-item-image" />
              <div className="order-item-info">
                <h3>{item.name}</h3>
                <p>Quantity: {item.quantity}</p>
              </div>
              <div className="order-item-price">₹{(item.price * item.quantity).toLocaleString('en-IN')}</div>
            </div>
          ))}
        </div>

        <div className="order-total">
          <div className="total-row">
            <span>Subtotal:</span>
            <span>₹{orderData.total.toLocaleString('en-IN')}</span>
          </div>
          <div className="total-row">
            <span>Shipping:</span>
            <span>₹{shippingCost.toLocaleString('en-IN')}</span>
          </div>
          <div className="total-row">
            <span>Tax (10%):</span>
            <span>₹{Math.round(orderData.total * taxRate).toLocaleString('en-IN')}</span>
          </div>
          <div className="total-row grand-total">
            <span>Total Amount:</span>
            <span>₹{(orderData.total + shippingCost + Math.round(orderData.total * taxRate)).toLocaleString('en-IN')}</span>
          </div>
        </div>

        <div className="next-steps">
          <h2>Next Steps</h2>
          <ol>
            <li>You will receive a confirmation email shortly</li>
            <li>Your order will be prepared for shipment within 2-3 business days</li>
            <li>You will receive a tracking number via email when your order ships</li>
            <li>Your pets will arrive safe and healthy at your doorstep</li>
          </ol>
        </div>

        <div className="contact-info">
          <p>Have questions? Contact our support team at <strong>support@petshop.com</strong> or call <strong>+91 98765 43210</strong></p>
        </div>

        <Link to="/" className="btn-home">Continue Shopping</Link>
      </div>
    </div>
  )
}
