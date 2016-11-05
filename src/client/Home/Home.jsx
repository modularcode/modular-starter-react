// Libs
import React from 'react';

// Styles
import './Home.scss';

// Components
import Header from '../_common/Header/Header';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <br /><br />
        <h1>
          This is home page
        </h1>
      </div>
    );
  }
}
