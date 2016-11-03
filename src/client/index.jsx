import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Main from './Main';

render(<AppContainer><Main /></AppContainer>, document.querySelector('#app'));

/*
Ref: http://www.dimagimburg.com/react-hot-loader-with-stateless-components-code-example/
if (module.hot) {
  module.hot.accept('./Main', () => {
    Main = require('./Main').default; // eslint-disable-line global-require

    render(
      <AppContainer>
        <Main />
      </AppContainer>,
      document.querySelector('#app')
    );
  });
}
*/