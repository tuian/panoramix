var webpack = require('webpack');
var path    = require('path');

var APP_DIR   = path.resolve(__dirname, './'); // input
var BUILD_DIR = path.resolve(__dirname, './javascripts/dist'); // output

var config = {
  // for now generate one compiled js file per entry point / html page
  entry: {
    index: APP_DIR + '/javascripts/index.jsx',
    explore: APP_DIR + '/javascripts/explore.js',
    // dashboard: APP_DIR + '/javascripts/dist/dashboard.js',
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].entry.js'
  },
  module : {
    loaders : [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        exclude: APP_DIR + '/node_modules',
        loader: 'babel' // transpile jsx + ES2015/6 -> ES5
      },
      {
        test: /\.css$/,
        exclude: APP_DIR + '/node_modules',
        loader: "style-loader!css-loader" // load css via require('../*.css')
      }
    ]
  },
  plugins: []
};

module.exports = config;