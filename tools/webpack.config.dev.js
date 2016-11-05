const autoprefixer = require('autoprefixer');
const path = require('path');

const config = require('./config');

const webpackConfigBase = require('./webpack.config.base');
const webpackConfigDevelopment = {
  entry: [
    'react-hot-loader/patch',
    path.resolve(config.CLIENT_DIR, 'index.jsx')
  ],
  output: {
    path: config.DIST_DIR,
    publicPath: "/bundle",
    filename: 'bundle.js'
  },
  eslint: {
    configFile: config.ROOT_DIR + '/.eslintrc'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: config.PUBLIC_DIR,
    historyApiFallback: true,
  },
};

module.exports = Object.assign({}, webpackConfigBase, webpackConfigDevelopment);
