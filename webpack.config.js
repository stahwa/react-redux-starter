var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  entry: './src/index.js',
  output: { 
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js', '.scss']
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          "style-loader",
          "css-loader!sass")
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-object-rest-spread']
        }
      }

    ]
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new ExtractTextPlugin("main.css"),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
};