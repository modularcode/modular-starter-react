const autoprefixer = require('autoprefixer');
const path = require('path');

const config = require('./config');


module.exports = {
  entry: [
    path.resolve(config.CLIENT_DIR, 'index.jsx')   // Your appʼs entry point
  ],
  output: {
    path: config.DIST_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: config.NPM_DIR,
        loader: 'babel',
      },
      {
        test:   /\.scss/,
        loader: 'css!sass',
      }
    ]
  },
  plugins: [

  ],
  postcss: () => [
    autoprefixer({ browsers: 'last 2 version' })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['src', 'node_modules'],
    root: config.ROOT_DIR,
  }
};
