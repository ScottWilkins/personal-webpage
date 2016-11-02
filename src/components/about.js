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
          <h3 className="about-me-title">About Me</h3>
        <div className="flex-row">
          <img className="me-olive safari_only" src={Me} alt="cartoon pic of me with cat" />
          <div className="horizontal-spacer"></div>
          <p className="about-me">Art party heirloom +1 church-key artisan. Synth tofu four loko, knausgaard salvia lumbersexual 3 wolf moon mumblecore migas kinfolk sartorial hoodie edison bulb affogato austin. Jean shorts butcher chillwave, freegan tumeric intelligentsia street art jianbing snackwave mumblecore lo-fi blue bottle organic. Chicharrones air plant ethical keffiyeh succulents. Tumeric edison bulb blog seitan VHS, XOXO fanny pack vegan umami. Activated charcoal you probably haven't heard of them truffaut messenger bag la croix, ramps hella. Church-key tbh tousled raclette, viral austin hexagon drinking vinegar fixie.</p>
        </div>
        <Footer />
      </div>
    </div>
    )
  }
