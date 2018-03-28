var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});

const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      components: path.resolve( __dirname, 'src/components' ),
      containers: path.resolve( __dirname, 'src/containers' )
    },
    extensions: ['.js', '.scss']
  },
  // resolve: {
  //   root: path.resolve('./src'),
  //   extensions: ['.js', '.scss']
  // },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // MiniCssExtractPlugin.loader,
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
        
      }

    ]
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new MiniCssExtractPlugin("main.css"),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ]
};