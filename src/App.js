import React, { Component } from 'react';
import turtle from './resources/turtle.svg';
import {Link} from 'react-router';
import './App.css';
import Navbar from './components/navbar';
import rabbit from './resources/rabbit.svg';
import penguin from './resources/penguin.svg';
import llama from './resources/llama.svg';
import squirrel from './resources/squirrel.svg';
import nodeJS from './resources/nodejs-logo.png';
import react from './resources/react.png';
import redux from './resources/redux.png';
import htmlCss from './resources/HTML-CSS3.jpg';
import angular from './resources/angular_js.png';
import firebase from './resources/firebase.png';
import express from './resources/express.png';
import bubbleLeft from './resources/bubble-left.png';
import bubbleRight from './resources/bubble-right.png';
import money from './resources/fairshare.svg';
import reddit from './resources/reddit.svg';
import crow from './resources/crow.svg';
import sesame from './resources/sesame.svg';
import bubbles from './resources/bubbled.svg';
import postgresQL from './resources/postgresq.png';
import $ from 'jquery';
import Footer from './components/footer';


class App extends Component {
constructor(props){
  super(props)
  this.embiggen = this.embiggen.bind(this);
  this.emsmallen = this.emsmallen.bind(this);
}

  embiggen(event){

    const bubble = event.target;
    const target = $(bubble).data("target");
    const expression = $(bubble).data("expression");
    const content = $(bubble).data("content");
    const icon = $(bubble).data("icon");
    const direction = $(bubble).data("direction")
    if(direction === "left"){
      $(`${target}`).animate({height: "700px", width: "700px"});
      $(`${expression}`).fadeOut("fast", function(){
        $(`${content}`).fadeIn("fast")
      });
      $(`${icon}`).fadeTo(200, .1);
    } else {
      $(`${icon}`).fadeTo(200, .1, null, function(){
        $(`${expression}`).fadeOut("fast", function(){
                $(`${target}`).animate({height: "700px", width: "700px"}, function(){
                    $(`${content}`).fadeIn("fast")
                });
        })
      })
    }
  }
  emsmallen(event){
    const bubble = event.target;
    const target = $(bubble).data("target");
    const expression = $(bubble).data("expression");
    const content = $(bubble).data("content");
    const icon = $(bubble).data("icon");
    $(`${content}`).fadeOut("fast", function(){
      $(`${target}`).animate({height: "300px", width: "300px"}, function(){
        $(`${expression}`).fadeIn("fast");
        $(`${icon}`).fadeTo(200, 1.0);
      });

    })
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="App container">

          <div className="title">
            <h1 className="my-name">Scott Wilkins</h1>
            <h2 className="josefin">Web Developer</h2>
            <img src={bubbles} className="bubbles" alt="logo" />
            <img src={turtle} className="App-logo" alt="turtle" />
          </div>

{/*********************** About me *********************** */}

          <div className="section">
            <section className="section-left">
              <img src={rabbit} className="me rabbit ico" alt="origami rabbit" />
              <div
                ><img src={bubbleLeft} className="me bubble-about" alt="chat bubble" /></div>
                <div>
                  <div className="text">
                    <h3>Hi</h3>
                    <p>I'm Scott</p>
                    <p>I live in Denver Colorado. Salvia tacos subway tile poke photo booth, paleo food truck dreamcatcher blog hot chicken gluten-free. Heirloom craft beer poke, lumbersexual offal mlkshk echo park bespoke vegan small batch. Austin fingerstache 8-bit, ethical shoreditch put a bird on it chia stumptown wolf post-ironic.</p>
                  <h3 className="x" onClick={this.emsmallen}
                     data-target=".bubble-about"
                     data-expression=".title-rabbit"
                     data-content=".text"
                     data-icon=".rabbit"
                     data-direction="left">
                     X
                   </h3>
                  </div>
                  <h3 className="josefin title-rabbit expression" onClick={this.embiggen}
                     data-target=".bubble-about"
                     data-expression=".title-rabbit"
                     data-content=".text"
                     data-icon=".rabbit"
                     data-direction="left">

                     About Me</h3>
                </div>
            </section>

{/*********************** Portfolio *********************** */}

            <section className="section-right section-penguin">
              <div>
                <img src={bubbleRight} className="me bubble-portfolio" alt="chat bubble" />
              </div>
              <img src={penguin} className="me penguin" alt="origami penguin" />
                <div className="josefin portfolio">
                  <h2>Click on icon for a brief description</h2>
                  <div className="portfolio-div-main">
                    <Link className="portfolio-link" to={{ pathname: '/portfolio', query: { project: 'sesame' } }}>
                      <div className="portfolio-div">
                        <img src={sesame} alt="sesame" />
                      </div>
                    </Link>
                    <Link className="portfolio-link" to={{ pathname: '/portfolio', query: { project: 'fairshare' } }}>
                      <div className="portfolio-div">
                        <img src={money} alt="fairshare" />
                      </div>
                    </Link>
                    <Link className="portfolio-link" to={{ pathname: '/portfolio', query: { project: 'reddit' } }}>
                      <div className="portfolio-div">
                        <img src={reddit} alt="reddit" />
                      </div>
                    </Link>
                    <Link className="portfolio-link" to={{ pathname: '/portfolio', query: { project: 'wiki' } }}>
                      <div className="portfolio-div">
                        <img src={crow} alt="crow" />
                      </div>
                    </Link>
                  </div>
                    <h3 className="x" onClick={this.emsmallen}
                      data-target=".bubble-portfolio"
                      data-expression=".title-penguin"
                      data-content=".portfolio"
                      data-icon=".penguin"
                      data-direction="right">
                      X
                    </h3>
                </div>

                <div>
                  <h3 className="josefin title-penguin expression"
                     onClick={this.embiggen}
                     data-target=".bubble-portfolio"
                     data-expression=".title-penguin"
                     data-content=".portfolio"
                     data-icon=".penguin"
                     data-direction="right">
                     Portfolio</h3>
                </div>
            </section>

{/*********************** Skills *********************** */}

            <section className="section-left section-llama">
              <img src={llama} className="me llama" alt="origami llama" />
              <img src={bubbleLeft} className="me bubble-skills" alt="chat bubble" />
                <div>
                  <div className="row">
                    <div className="img-skills skills">
                      <img src={htmlCss} alt="htmlCss" />
                      <img src={nodeJS} alt="nodeJS" />
                      <img src={react} alt="react" />
                      <img src={redux} alt="redux" />
                      <img src={postgresQL} alt="postgresQL" />
                      <img src={angular} alt="angular" />
                      <img src={firebase} alt="firebase" />
                      <img src={express} alt="express" />
                        <h3 className="x" onClick={this.emsmallen}
                           data-target=".bubble-skills"
                           data-expression=".title-llama"
                           data-content=".skills"
                           data-icon=".llama"
                           data-direction="left">
                           X
                         </h3>
                  </div>

                  </div>
                  <h3 className="josefin title-llama expression"
                    onClick={this.embiggen}
                    data-target=".bubble-skills"
                    data-expression=".title-llama"
                    data-content=".skills"
                    data-icon=".llama"
                    data-direction="left">Skills</h3>
                </div>
            </section>

{/*********************** Contact *********************** */}

            <section className="section-right bottom">
              <img src={bubbleRight} className="me bubble-contact" alt="chat bubble" />
              <img src={squirrel} className="me squirrel" alt="origami squirrel" />
                <div className="contact"><p>Salvia tacos subway tile poke photo booth, paleo food truck dreamcatcher blog hot chicken gluten-free. Heirloom craft beer poke, lumbersexual offal mlkshk echo park bespoke vegan small batch. Austin fingerstache 8-bit, ethical shoreditch put a bird on it chia stumptown wolf post-ironic. Paleo coloring book occupy, typewriter mustache keffiyeh affogato vice echo park venmo four loko vaporware messenger bag listicle. Jean shorts PBR&B cray, food truck deep v heirloom dreamcatcher. Health goth cold-pressed cardigan, freegan blog chambray cray copper mug. Microdosing before they sold out skateboard kickstarter man bun XOXO.</p>
                <h3 className="x" onClick={this.emsmallen}
                   data-target=".bubble-contact"
                   data-expression=".title-squirrel"
                   data-content=".contact"
                   data-icon=".squirrel"
                   data-direction="right">
                   X
                 </h3>
                </div>
                <div className="arrow-div">
                  <h3 className="josefin title-squirrel expression"
                    onClick={this.embiggen}
                    data-target=".bubble-contact"
                    data-expression=".title-squirrel"
                    data-content=".contact"
                    data-icon=".squirrel"
                    data-direction="right">Contact</h3>
                </div>
            </section>

          </div>

        </div>
        <Footer />
      </div>

    );
  }
}

export default App;
