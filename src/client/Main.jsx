// Libs
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// Styles
import './Main.scss';

// Components
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';

export default class Main extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/"component={Home} />
        <Route path="/about"component={About} />
        <Route path="/contact"component={Contact} />
      </Router>
    );
  }
}
