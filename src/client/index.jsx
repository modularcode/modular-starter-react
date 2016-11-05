// Libs
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';


// Components
import App from './App';
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';

ReactDOM.render(
  <AppContainer>
    <Router history={browserHistory}>
      <Route component={App}>
        <Route path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
      </Route>
    </Router>
  </AppContainer>,
  document.querySelector('#app')
);
