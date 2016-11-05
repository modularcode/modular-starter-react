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
          <Link to={'/'}>Home</Link>
          <Link to={'/about'}>About</Link>
          <Link to={'/contact'}>Contact</Link>
        </nav>
      </header>
    );
  }
}
