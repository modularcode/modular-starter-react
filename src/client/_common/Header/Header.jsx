// Libs
import React from 'react';
import { Link } from 'react-router';

// Styles
import './Header.scss';

// Components

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <nav className="header-nav">
          <Link to={'/'} activeClassName="active">Home</Link>
          <Link to={'/about'} activeClassName="active">About</Link>
          <Link to={'/contact'} activeClassName="active">Contact</Link>
        </nav>
      </header>
    );
  }
}
