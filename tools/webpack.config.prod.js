const autoprefixer = require('autoprefixer');
const path = require('path');

const config = require('./config');

const webpackConfigBase = require('./webpack.config.base');
const webpackConfigProduction = {
  entry: [
    path.resolve(config.CLIENT_DIR, 'index.jsx')
  ],
  output: {
    path: config.DIST_DIR,
    filename: 'bundle.js'
  }
};

module.exports = Object.assign({}, webpackConfigBase, webpackConfigProduction);


