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
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
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
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'app.bundle.css',
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
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
      DEBUG: false,
    }),
    new CopyWebpackPlugin([
      {
      from: 'src/favicom.ico',
      to: '/'
      },
      {
        from: 'src/manifest.json',
        to: '/'
      },
      {
        from: 'src/robots.txt',
        to: '/'
      },
      {
        from: 'src/icons/**/*',
        to: '/icons'
      },
      {
        from: 'src/images/**/*',
        to: '/images'
      }
    ],
    {
      copyUnmodified: true
    }),
  ],
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
};
