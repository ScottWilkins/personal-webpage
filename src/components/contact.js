import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import Me from '../resources/me-and-o.jpg';
import $ from 'jquery';

$('html,body').scrollTop(0);

export default () => {
    return (
    <div>
      <Navbar />
      <div className="portfolio-title project-container">
          <h3 className="about-me-title">Contact</h3>
        <div className="flex-row">
          <img className="me-olive safari_only" src={Me} alt="cartoon pic of me with cat" />
          <div className="horizontal-spacer"></div>
          <p className="about-me">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
        <Footer />
      </div>
    </div>
    )
  }
