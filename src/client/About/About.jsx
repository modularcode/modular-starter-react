// Libs
import React from 'react';

// Styles
import './About.scss';

// Components
import Header from '../_common/Header/Header';

export default class About extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <br /><br />
        <h1>
          This is about page
        </h1>
      </div>
    );
  }
}
