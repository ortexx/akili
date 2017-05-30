const webpack = require('webpack');
const path = require('path');
const pack = require('./package.json');

let entry = {
  'akili': "./src/akili.js"
};

let plugins = [];
let minimize = process.env.MINIMIZE;
let watch = !process.env.BUILD;

let banner = `Akili is a javascript framework\n
const Akili = makeItEasy(js + html);\n
@author Alexandr Balasyan <mywebstreet@gmail.com>
@link http://akilijs.com
@version ${pack.version}`;

plugins.push(new webpack.BannerPlugin({
  banner: banner.trim()
}));

plugins.push(new webpack.optimize.UglifyJsPlugin({
  include: /\.min\.js$/,
  minimize: true,
  compress: {
    warnings: false
  }
}));

minimize && (entry['akili.min'] = entry.akili);

let config = {
  watch: watch,
  bail: true,
  devtool: "inline-source-map",
  entry: entry,
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-0', 'stage-3']
        }
      }
    ]
  },
  plugins: plugins
};

module.exports = config;