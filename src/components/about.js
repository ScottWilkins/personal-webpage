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
            <h3>About Me</h3>
            <h2 className="josefin">Scott Wilkins</h2>
            <div className="contact-spacer"></div>
          </div>
          <div className="middle-contact-container">
            <div>
              <img className="me-olive safari_only" src={Me} alt="cartoon pic of me with cat" />
            </div>
            <div className="contacts">
              <p>Vaporware tumeric gluten-free, neutra whatever semiotics williamsburg. Fingerstache chicharrones tilde venmo you probably haven't heard of them leggings. PBR&B trust fund roof party, small batch gochujang cold-pressed health goth schlitz helvetica. Marfa banh mi glossier, cronut man bun mumblecore viral jianbing. Iceland poke mlkshk distillery. Hashtag pinterest tumblr godard, trust fund tousled small batch hell of irony beard four loko pork belly wayfarers twee williamsburg. Tumblr shoreditch vaporware, farm-to-table stumptown man bun forage tumeric sustainable fam.</p>
            </div>

          </div>


        </div>
        <Footer />
      </div>
    )
  }
