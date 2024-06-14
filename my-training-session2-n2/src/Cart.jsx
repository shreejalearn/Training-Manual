// src/pages/Cart.jsx
import React from 'react';
import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';
import { cartAtom } from './cartAtom';
import './Cart.css';

const Cart = () => {
    const [cart, setCart] = useAtom(cartAtom);
    const navigate = useNavigate();
  
    const incrementQuantity = (id) => {
      setCart(cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
    };
  
    const decrementQuantity = (id) => {
      setCart(cart.map(item => item.id === id ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 } : item));
    };
  
    const handleCheckout = () => {
      alert('Thank you, for choosing us. Your Cart will arrive in 2 days.');
      setCart([]); // Clear the cart after checkout
      navigate('/');
    };
  
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  
    return (
      <div className="cart-container">
        <h1 className='title'>Cart</h1>
        <ul className="cart-list">
          {cart.map(item => (
            <li key={item.id} className="cart-item">
              <h2>{item.name}</h2>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <div className="quantity-buttons">
                <button onClick={() => decrementQuantity(item.id)}>-</button>
                <button onClick={() => incrementQuantity(item.id)}>+</button>
              </div>
            </li>
          ))}
        </ul>
        <div className="total-price">
          <h2>Total Price: ${totalPrice}</h2>
        </div>
        <button onClick={handleCheckout} className="checkout-button">Checkout</button>
      </div>
    );
  };
  
  export default Cart;
  