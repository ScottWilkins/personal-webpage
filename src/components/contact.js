import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import turtle from '../resources/turtle.svg';
import bubbles from '../resources/bubbled.svg';
import $ from 'jquery';

$('html,body').scrollTop(0);

export default () => {
    return (
    <div>
      <Navbar />
      <div className="container container-about-contact">
        <div className="spacer"></div>
        <div className="middle-contact-container">
          <div className="contacts-images">
            <img className="bubbles bubbles-about-contact" src={bubbles} alt="bubbles" />
            <img className="me-olive safari_only" src={turtle} alt="turtle" />
          </div>
          <div className="contacts">
            <p className="contact-info"><i className="fa fa-footer fa-phone-square"></i>(720)280-5450 </p>
            <p className="contact-info"><a href="mailto:scottjeffreywilkins@gmail.com"> <i className="fa fa-envelope fa-navbar"></i>   scottjeffreywilkins@gmail.com </a></p>
            <p className="contact-info"><a href="https://www.linkedin.com/in/scottjwilkins" target="_blank"><i className="fa fa-navbar fa-linkedin"></i> linkedin.com/in/scottjwilkins</a></p>
            <p className="contact-info"><a href="https://github.com/ScottWilkins" target="_blank"><i className="fa fa-navbar fa-github"></i> github.com/ScottWilkins</a></p>
            <p className="contact-info"><a href="https://twitter.com/scottjeffreywi1" target="_blank"><i className="fa fa-navbar fa-twitter"></i> twitter.com/scottjeffreywi1</a></p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    )
  }
