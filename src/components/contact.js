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
      <div className="container container-about-contact">
        <div className="contact-title">
          <h3>Contact</h3>
          <h2 className="josefin">Scott Wilkins</h2>
          <div className="contact-spacer"></div>
        </div>
        <div className="middle-contact-container">
          <div>
            <img className="me-olive safari_only" src={Me} alt="cartoon pic of me with cat" />
          </div>
          <div className="contacts">
            <p className="contact-info"><i className="fa fa-footer fa-phone-square"></i>(720)280-5450 </p>
            <p className="contact-info"><a href="mailto:scottjeffreywilkins@gmail.com"> <i className="fa fa-envelope fa-navbar"></i>   scottjeffreywilkins@gmail.com </a></p>
            <p className="contact-info"><a href="https://www.linkedin.com/in/scottjwilkins" target="_blank"><i className="fa fa-navbar fa-linkedin"></i> linkedin.com/in/scottjwilkins</a></p>
            <p className="contact-info"><a href="https://github.com/ScottWilkins" target="_blank"><i className="fa fa-navbar fa-github"></i> github.com/ScottWilkins</a></p>
            <p className="contact-info"><a href="https://twitter.com/scottjeffreywi1" target="_blank"><i className="fa fa-navbar fa-twitter"></i> twitter.com/scottjeffreywi1</a></p>
            <p className="contact-info"><a href="https://www.facebook.com/ScottJeffreyWilkins" target="_blank"><i className="fa fa-navbar fa-facebook"></i> facebook.com/ScottJeffreyWilkins</a></p>
          </div>

        </div>


      </div>
      <Footer />
    </div>
    )
  }
