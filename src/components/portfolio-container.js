import React, {Component} from 'react';
import Portfolio from './portfolio'
import Navbar from './navbar';
import Footer from './footer';
import ProjectName from './projectName.js';
import money from '../resources/fairshare.svg';
import reddit from '../resources/reddit.svg';
import crow from '../resources/crow.svg';
import sesame from '../resources/sesame.svg';
import leftArrow from '../resources/left-arrow.svg';
import $ from 'jquery';
import { Link } from 'react-router';


export default class PortfolioContainer extends Component {
  constructor(props){
    super(props);
    const queryParams = this.props.location.query;
    if(Object.keys(queryParams).length === 0){
      this.state = {project: "sesame"}
    } else {
      this.state = queryParams;
    }
  }

  render() {
    $('html,body').scrollTop(0);
    return (
    <div>
      <Navbar />
      <div className="portfolio-title project-container">
        <h3>Portfolio</h3>
      </div>
      <div className="container portfolio-nav">
      <Link to="/">
        <div className="portfolio-div">
          <h4>back home</h4>
          <img src={leftArrow} alt="home icon"
            className="portfolio-icon"
            />
        </div>
      </Link>
        <div className="portfolio-div">
        <h4>sesame</h4>
        <img src={sesame} alt="sesame icon"
        className="portfolio-icon"
        onClick={() => {this.setState({ project: "sesame"})}}/>
        </div>
        <div className="portfolio-div">
          <h4>fairshare</h4>
          <img src={money} alt="fairshare icon"
            className="portfolio-icon"
            onClick={() => {this.setState({ project: "fairshare"})}}/>
        </div>
        <div className="portfolio-div">
          <h4>wiki of thrones</h4>
          <img src={crow} alt="wiki icon" className="portfolio-icon"
          onClick={() => {this.setState({ project: "wiki"})}}/>
        </div>
        <div className="portfolio-div">
          <h4>reddit klone</h4>
          <img src={reddit} alt="reddit icon" className="portfolio-icon"
          onClick={() => {this.setState({ project: "reddit"})}}/>
        </div>
      </div>
      <ProjectName project={this.state.project}/>
      <Portfolio project={this.state.project}/>
      <Footer />
    </div>
    )
  }
}
