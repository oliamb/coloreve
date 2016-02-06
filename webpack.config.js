/* Copyright (c) 2016 Olivier Amblet */

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, 'app/index.jsx')
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      loaders: ['babel?presets[]=react,presets[]=es2015', 'flowcheck']
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', 'css!sass')
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'html!./app/index.html'
  }), new ExtractTextPlugin('[name].css')],
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, 'node_modules', 'normalize-scss', 'sass'),
      path.resolve(__dirname, 'node_modules', 'normalize-scss', 'node_modules', 'support-for', 'sass')
    ]
  }
};
