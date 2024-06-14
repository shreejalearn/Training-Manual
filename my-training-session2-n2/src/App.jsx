import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAtom } from 'jotai';
import { cartAtom } from './cartAtom';
import './App.css';

const App = () => {
  const [cart] = useAtom(cartAtom);

  return (
    <div className='App'>
        <nav className="navbar">
          <ul className="nav-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">Cart ({cart.length})</Link>
            </li>
          </ul>
        </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
