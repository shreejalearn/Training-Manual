import React from 'react';
import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import dummyData from './data';
import { cartAtom } from './cartAtom.js';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Home.css';

const Home = () => {
  const [cart, setCart] = useAtom(cartAtom);
  const navigate = useNavigate();

  const addToCart = (item) => {
    setCart(prevCart => {
      const itemInCart = prevCart.find(cartItem => cartItem.id === item.id);
      if (itemInCart) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
    navigate('/cart');
  };

  return (
    <div className="home-container">
      <h1 className='title'>Grocery Items</h1>
      <ul className="item-list">
        {dummyData.map(item => (
          <li key={item.id} className="item">
            <h2>{item.name}</h2>
            <p>Price: ${item.price}</p>
            <p>Volume: {item.volume}</p>
            <div className="image-container">
              <Carousel>
                {item.images.map((url, index) => (
                  <div key={index} className="carousel-slide">
                    <img src={url} alt={item.name} className="item-image" />
                  </div>
                ))}
              </Carousel>
            </div>
            <button onClick={() => addToCart(item)} className="add-to-cart-button">Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
