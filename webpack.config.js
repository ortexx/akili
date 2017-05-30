const webpack = require('webpack');

let entry = {
  'akili': "./src/akili.js",
};

let plugins = [];
let minimize = process.env.MINIMIZE;
let watch = !process.env.BUILD;

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
    path: "./dist",
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