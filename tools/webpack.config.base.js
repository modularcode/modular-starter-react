const autoprefixer = require('autoprefixer');
const path = require('path');

const config = require('./config');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: config.NPM_DIR,
        loader: 'babel',
      },
      {
        test:   /\.scss/,
        loader: 'style!css!sass',
      },
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.png$/,
        loader: "url-loader?limit=100000"
      },
      {
        test: /\.jpg$/,
        loader: "file-loader"
      }
    ]
  },
  sassLoader: {
    includePaths: [
      config.NPM_DIR
    ]
  },
  postcss: () => [
    autoprefixer({ browsers: 'last 2 version' })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['src', 'node_modules'],
    root: config.ROOT_DIR,
  }
};
