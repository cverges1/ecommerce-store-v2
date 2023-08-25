import React from "react";
//import Auth from "../../utils/auth";
//import { Link } from "react-router-dom";

function Nav ({ loggedIn }) {
  return (
    <header id='nav-wrapper'>
      <nav id='nav'>
        <div className='navbar-left'>
          <a href='/'>Happy Tails</a>
        </div>
        <div className='navbar-right'>
          <ul>
            {loggedIn ? (
              <a>
                <li id='logout'><a href='#'>Logout</a></li>
                <li><a href='#'>Shopping Cart</a></li>
              </a> 
              ) : (
               <a>
                <li><a href='/signup'>Sign Up</a></li>
                <li><a href='/login'>Login</a></li>
              </a>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
