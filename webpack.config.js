const path = require('path');

const config = {
  entry: {
    agenda: ['@babel/polyfill', './app/agenda/'],

  },
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-proposal-class-properties']
        },
      },
    ],
  },
};

if (process.env.NODE_ENV === 'development') {
  config.watch = true;
  config.watchOptions = {
    aggregateTimeout: 3000,
  };
  config.devtool = '#cheap-eval-source-map';
}

module.exports = config;
