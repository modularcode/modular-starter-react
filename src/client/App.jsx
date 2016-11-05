// Libs
import React from 'react';

// Styles
import './app.scss';

// Components
import Header from './_common/Header/Header';

export default class Main extends React.Component {
  render() {
    return (
      <div id="main-container" className="main-container">
        <Header />
        <div className="app-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
