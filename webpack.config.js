/* eslint-disable global-require */
/**
 * @name : orinoco
 * @create : 2020/04/05
 * @version : 1.0.0
 * @author : François, Joël Lesenne
 * @depot : <https://github.com/joellesenne/ocr-dw-p5-orinoco-frontend.>
 * Licence : MIT <https://mit-license.org/>
 */

/**
 * @load modules dependencies
 */
const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
        resolve: {
          extensions: ['.js'],
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: { url: false, sourceMap: true },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        ],
      },
      {
        test: /\.jpe?g$|\.ico$|\.txt$|\.json$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        loader: 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'file-loader?name=[name].[ext]',
        type: 'javascript/auto'
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css',
    }),
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Caméras vintage',
      template: './src/index.html',
      filename: './index.html',
    }),
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Choisir ce produit',
      template: './src/produit.html',
      filename: './produit.html',
    }),
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Valider le panier',
      template: './src/panier.html',
      filename: './panier.html',
    }),
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Confirmation de votre achat',
      template: './src/confirmation.html',
      filename: './confirmation.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/images', to: 'images' },
        { from: 'src/icons', to: 'icons' },
      ],
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
      DEBUG: false,
    }),
    
  ],
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
};
