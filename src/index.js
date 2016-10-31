import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Portfolio from './components/portfolio-container';
import './index.css';
import {Router, Route} from "react-router";
import { browserHistory } from 'react-router';

const app = (
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/portfolio" component={Portfolio} />
  </Router>
)
ReactDOM.render(
  app,
  document.getElementById('root')
);
