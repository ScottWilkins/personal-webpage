import React from 'react';
import { Link} from 'react-router';
export default function() {

    return (
      <div className="navbar">
        <div className="row">
          <div className="col-sm-4 col-xs-6">
            <Link to="/">home</Link>
          </div>
          <div className="col-sm-1 col-xs-6">
            <Link to="/about">about</Link>
          </div>
          <div className="col-sm-1 col-xs-6">
            <Link to="/portfolio">portfolio</Link>
          </div>
          <div className="col-sm-1 col-xs-6">
            <Link to="/contact">contact</Link>
          </div>
          <div className="col-sm-2 col-sm-offset-1 icons col-xs-6">
            <a href="https://www.linkedin.com/in/scottjwilkins" target="_blank"><i className="fa fa-navbar fa-linkedin"></i></a>
            <a href="https://github.com/ScottWilkins" target="_blank"><i className="fa fa-navbar fa-github"></i></a>
            <a href="https://twitter.com/scottjeffreywi1" target="_blank"><i className="fa fa-navbar fa-twitter"></i></a>
            <a href="https://www.facebook.com/ScottJeffreyWilkins" target="_blank"><i className="fa fa-navbar fa-facebook"></i></a>
          </div>
          <div className="col-sm-1">
          </div>
        </div>
      </div>
    )
  }
