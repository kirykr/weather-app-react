import React from 'react';
var ReactDOM = require('react-dom');
// import { BrowserRouter,HashRouter, Switch, Link, Route} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';
//


import Nav from 'Nav';
import Main from 'Main';
//
const history = createHashHistory();
const App = () => (
  <div>
    <Nav />
    <Main />
  </div>
);

// This demo uses a HashRouter instead of BrowserRouter
// because there is no server to match URLs
ReactDOM.render((
  <BrowserRouter history={history}>
    <App />
  </BrowserRouter>
), document.getElementById('app'));
