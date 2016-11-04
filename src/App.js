import React, { Component } from 'react';
import turtle from './resources/turtle.svg';
import {Link} from 'react-router';
import './App.css';
import Navbar from './components/navbar';
import rabbit from './resources/rabbit.svg';
import penguin from './resources/penguin.svg';
import llama from './resources/llama.svg';
import squirrel from './resources/squirrel.svg';
import bubbleLeft from './resources/bubble-left.png';
import bubbleRight from './resources/bubble-right.png';
import money from './resources/fairshare.svg';
import reddit from './resources/reddit.svg';
import crow from './resources/crow.svg';
import sesame from './resources/sesame.svg';
import bubbles from './resources/bubbled.svg';

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
      $(`${icon}`).fadeTo(200, .2);
    } else {
      $(`${icon}`).fadeTo(200, .2, null, function(){
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
        <Navbar page="home"/>
        <div className="App container">

          <div className="title">
            <h1 className="my-name">scott wilkins</h1>
            <h2 className="josefin">web developer</h2>
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
                    <p>I'm a web developer currently living in Denver, Colorado. For a long time I managed restaurants where I put together teams to deliver a product under highly constrained deadlines. Applying this mentality to web development has helped me grow as a developer with the understanding that time is money. I learn fast and know the value of delivering a product on time. If you'd like to get together over a beer (or two...) and discuss what I can do for you, feel free to reach out.<Link to="/about"> more...</Link></p>
                    <div onClick={this.emsmallen}>
                      <h3 className="x"
                        data-target=".bubble-about"
                        data-expression=".title-rabbit"
                        data-content=".text"
                        data-icon=".rabbit"
                        data-direction="left">
                         X <small
                         data-target=".bubble-about"
                         data-expression=".title-rabbit"
                         data-content=".text"
                         data-icon=".rabbit"
                         data-direction="left">close</small>
                       </h3>
                    </div>
                  </div>
                  <h3 className="josefin title-rabbit expression" onClick={this.embiggen}
                     data-target=".bubble-about"
                     data-expression=".title-rabbit"
                     data-content=".text"
                     data-icon=".rabbit"
                     data-direction="left">

                     about me</h3>
                </div>
            </section>

{/*********************** Portfolio *********************** */}

            <section className="section-right section-penguin">
              <div>
                <img src={bubbleRight} className="me bubble-portfolio" alt="chat bubble" />
              </div>
              <img src={penguin} className="me penguin" alt="origami penguin" />
                <div className="josefin portfolio">
                  <h3>portfolio</h3>
                  <p className="default-font">Click on icon for a brief description</p>
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
                  <div onClick={this.emsmallen}>
                    <h3 className="x"
                      data-target=".bubble-portfolio"
                      data-expression=".title-penguin"
                      data-content=".portfolio"
                      data-icon=".penguin"
                      data-direction="right">
                      X <small
                      data-target=".bubble-portfolio"
                      data-expression=".title-penguin"
                      data-content=".portfolio"
                      data-icon=".penguin"
                      data-direction="right">close</small>
                    </h3>
                  </div>
                </div>

                <div>
                  <h3 className="josefin title-penguin expression"
                     onClick={this.embiggen}
                     data-target=".bubble-portfolio"
                     data-expression=".title-penguin"
                     data-content=".portfolio"
                     data-icon=".penguin"
                     data-direction="right">
                     portfolio</h3>
                </div>
            </section>

{/*********************** Skills *********************** */}

            <section className="section-left section-llama">
              <img src={llama} className="me llama" alt="origami llama" />
              <img src={bubbleLeft} className="me bubble-skills" alt="chat bubble" />
                <div>
                  <div className="row">
                    <div className="img-skills skills">
                      <h3 className="josefin">skills</h3>
                      <table>
                        <thead>
                          <tr>
                            <th>Languages</th>
                            <th>Techniques</th>
                            <th>Tools</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>JavaScript</td>
                            <td>Node.js</td>
                            <td>Agile Process</td>
                          </tr>
                          <tr>
                            <td>HTML5</td>
                            <td>Express</td>
                            <td>TDD</td>
                          </tr>
                          <tr>
                            <td>CSS3</td>
                            <td>React</td>
                            <td>Pair Programming</td>
                          </tr>
                          <tr>
                            <td>SQL</td>
                            <td>AngularJS</td>
                            <td>Pivotal Tracker</td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>jQuery</td>
                            <td>API integration</td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>Knex.js</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>Git/Github</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>Bootstrap</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>Firebase</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>Heroku</td>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                      <div onClick={this.emsmallen}>
                      <h3 className="x skills-x"
                         data-target=".bubble-skills"
                         data-expression=".title-llama"
                         data-content=".skills"
                         data-icon=".llama"
                         data-direction="left">
                         X <small
                         data-target=".bubble-skills"
                         data-expression=".title-llama"
                         data-content=".skills"
                         data-icon=".llama"
                         data-direction="left">close</small>
                       </h3>
                     </div>
                  </div>

                  </div>
                  <h3 className="josefin title-llama expression"
                    onClick={this.embiggen}
                    data-target=".bubble-skills"
                    data-expression=".title-llama"
                    data-content=".skills"
                    data-icon=".llama"
                    data-direction="left">skills</h3>
                </div>
            </section>

{/*********************** Contact *********************** */}

            <section className="section-right bottom">
              <img src={bubbleRight} className="me bubble-contact" alt="chat bubble" />
              <img src={squirrel} className="me squirrel" alt="origami squirrel" />
                <div className="contact">
                  <h3 className="josefin">contact me</h3>
                  <div className="contacts contacts-about">
                    <p className="contact-info"><i className="fa fa-footer fa-phone-square"></i>(720)280-5450 </p>
                    <p className="contact-info"><a href="mailto:scottjeffreywilkins@gmail.com"> <i className="fa fa-envelope fa-navbar"></i>   scottjeffreywilkins@gmail.com </a></p>
                    <p className="contact-info"><a href="https://www.linkedin.com/in/scottjwilkins" target="_blank"><i className="fa fa-navbar fa-linkedin"></i> linkedin.com/in/scottjwilkins</a></p>
                    <p className="contact-info"><a href="https://github.com/ScottWilkins" target="_blank"><i className="fa fa-navbar fa-github"></i> github.com/ScottWilkins</a></p>
                    <p className="contact-info"><a href="https://twitter.com/scottjeffreywi1" target="_blank"><i className="fa fa-navbar fa-twitter"></i> twitter.com/scottjeffreywi1</a></p>
                  </div>
                  <div onClick={this.emsmallen}>
                    <h3 className="x"
                     data-target=".bubble-contact"
                     data-expression=".title-squirrel"
                     data-content=".contact"
                     data-icon=".squirrel"
                     data-direction="right">
                     X <small
                     data-target=".bubble-contact"
                     data-expression=".title-squirrel"
                     data-content=".contact"
                     data-icon=".squirrel"
                     data-direction="right">close</small>
                    </h3>
                  </div>
                </div>
                <div className="arrow-div">
                  <h3 className="josefin title-squirrel expression"
                    onClick={this.embiggen}
                    data-target=".bubble-contact"
                    data-expression=".title-squirrel"
                    data-content=".contact"
                    data-icon=".squirrel"
                    data-direction="right">contact me</h3>
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
