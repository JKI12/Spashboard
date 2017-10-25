const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports ={
  entry: './src/client/client.js',
  output: {
    path: path.join(__dirname, 'dist/static'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader')
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css', {
      allChunks: true
    })
  ]
}