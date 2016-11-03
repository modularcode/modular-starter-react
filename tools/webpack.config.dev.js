const autoprefixer = require('autoprefixer');
const path = require('path');

const config = require('./config');


module.exports = {
  entry: [
    'react-hot-loader/patch',
    path.resolve(config.CLIENT_DIR, 'index.jsx')
  ],
  output: {
    path: config.DIST_DIR,
    publicPath: "/bundle",
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
