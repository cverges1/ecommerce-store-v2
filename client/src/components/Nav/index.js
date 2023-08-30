import React from "react";
//import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav({ loggedIn }) {
  return (
    <header id='nav-wrapper'>
      <nav id='nav'>
        <div className='navbar-left'>
          <Link to="/">Happy Tails</Link>
        </div>
        <div className='navbar-right'>
          <ul>
            {loggedIn ? (
              <>
                <li id='logout'><Link to="/">Logout</Link></li>
                <li><Link to="/">Home</Link></li>
                {/* Show the Shopping Cart button only when logged in */}
                <li><Link to="/">Shopping Cart</Link></li>
              </>
            ) : (
              <>
                <li><Link to="/Signup">Sign up</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/ShoppingCart">Shopping Cart</Link></li>

              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
