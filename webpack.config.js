const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const pack = require('./package.json');

let plugins = [];
let isProd = process.env.NODE_ENV == 'production';

let banner = `Akili is a javascript framework\n
const Akili = makeItEasy(js + html);\n
@version ${pack.version}
@author Alexandr Balasyan <mywebstreet@gmail.com>
{@link http://akilijs.com}
{@link https://github.com/ortexx/akili}`;

plugins.push(new webpack.BannerPlugin({
  banner: banner.trim()
}));

let config = {
  mode: isProd? 'production': 'development',
  performance: { hints: false },
  watch: !isProd,
  devtool: isProd? false: "inline-source-map",
  entry: "./src/akili.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "akili.js",
    library: 'Akili',
    libraryExport: "default",
    libraryTarget: 'umd'
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false
      })
    ]
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['akili']
        }
      }
    ]
  },
  plugins  
};

module.exports = config;