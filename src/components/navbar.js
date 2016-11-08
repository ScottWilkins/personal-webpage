import React from 'react';
import { Link} from 'react-router';
export default function(props) {
  function myClass(name) {
    console.log(props.page);
    return name === props.page ? "links highlight" : "links";
  }
  return (
    <div className="navbar">
      <div className="row">
        <div className="col-sm-4 col-xs-6">
          <Link to="/"><span className={myClass("home")}>scott wilkins</span></Link>
        </div>
        <div className="col-sm-1 col-xs-6">
          <Link to="/portfolio"><span className={myClass("port")}>portfolio</span></Link>
        </div>
        <div className="col-sm-1 col-xs-6">
          <Link to="/about"><span className={myClass("about")}>about me</span></Link>
        </div>
        <div className="col-sm-1 col-xs-6">
          <Link className="link" to="/contact"><span className={myClass("contact")}>contact</span></Link>
        </div>
        <div className="col-sm-2 col-sm-offset-1 icons col-xs-6">
          <a href="https://www.linkedin.com/in/scottjwilkins" target="_blank"><i className="fa fa-navbar fa-linkedin links"></i></a>
          <a href="https://github.com/ScottWilkins" target="_blank"><i className="fa fa-navbar fa-github links"></i></a>
          <a href="https://twitter.com/scottjeffreywi1" target="_blank"><i className="fa fa-navbar fa-twitter links"></i></a>
        </div>
        <div className="col-sm-1">
        </div>
      </div>
    </div>
  )
}
