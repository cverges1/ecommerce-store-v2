import React from 'react';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <section id='email-sign-up' className='e-mail-signup'>
        <div className='newsletter-text'>SIGN UP FOR OUR NEWSLETTER</div>
        <div className='email-box'>
          <input type='text' placeholder='E-mail' />
          <button>SEND</button>
        </div>
      </section>
      <div id='grouped-sections'>
        <section className='footer-section'>
          {/* CUSTOMER SUPPORT section */}
          <h4 className='section-title'>CUSTOMER SUPPORT</h4>
          <ul className='section-list'>
            <li>About us</li>
            <li>Payment Methods</li>
            <li>Return Policy</li>
            <li>FAQ</li>
          </ul>
        </section>
        <section className='footer-section'>
          {/* PRIVACY section */}
          <h4 className='section-title'>PRIVACY</h4>
          <ul className='section-list'>
            <li>Terms &amp; Conditions</li>
            <li>Cookies and Tracking</li>
            <li>Third-Party Disclosure</li>
          </ul>
        </section>
        <section className='footer-section'>
          {/* PRODUCTS section */}
          <h4 className='section-title'>CATEGORIES</h4>
          <ul className='section-list'>
              <li><Link to='/category/1' className='footer-a-tags'>Food</Link></li>
            <li><Link to='/category/2' className='footer-a-tags'>Toys</Link></li>
           <li><Link to='/category/3' className='footer-a-tags'>Leashes</Link></li>
              <li><Link to='/category/4' className='footer-a-tags'>Beds</Link></li>
         </ul>
        </section>
        <section className='footer-section'>
          {/* CONTACT US section */}
          <h4 className='section-title'>CONTACT US</h4>
          <ul className='section-list'>
            <li> lugo.kse23@gmail.com (Abelardo Lugo)</li>
            <li> 99grogan@gmail.com (Connor Grogan)</li>
            <li> vergeschris@gmail.com (Chris Verges)</li>
            <li> trentonsmiles@gmail.com (Trenton Sallee)</li>
          </ul>
        </section>
      </div>
      <p className='footer-bottom'>© 2023 HappyTails</p>
    </footer>
  );
}

export default Footer;
