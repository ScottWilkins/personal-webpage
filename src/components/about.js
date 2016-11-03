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
            <div className="contacts about-text">
            <p>I'm a typical Colorado native who enjoys the embarrassment of riches provided by our sunshine State. Camping, ice-climbing, blah, blah, you name it, I've at least tried it. I also love solving puzzles and findly myself strangely drawn to coding challenges. (Currently ranked 4kyu on Codewars.)</p>
            <p>Recently, I've found myself drawn to React and Redux for development. The combination of modularity and a single source of state is like magic for a coder. I do have experience with AngularJS and jQuery as well as SQL. From the web immersion course at Galvanize, I've learned to pick up new frameworks and languages quickly.</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
