import React from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import Logout from '../Logout';

function Nav() {
  return (
    <header id="nav-wrapper">
      <nav id="nav">
        <div className="navbar-left">
          <Link to="/">🐶 Happy Tails 🐶</Link>
        </div>
        <div className="navbar-right">
          <ul>
            {/* Conditional rendering based on user authentication */}
            {Auth.loggedIn() ? (
              <>
                <li>
                  <Logout></Logout>
                </li>
                <li>
                  <Link to="/">Home</Link>
                </li>
                {/* Show the Shopping Cart button only when logged in */}
                <li>
                  <Link to="/">Shopping cart</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/Signup">Sign up</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/ShoppingCart">Shopping Cart</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
