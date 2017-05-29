const webpack = require("webpack");

let prod = process.env.NODE_ENV == 'production';
let filename = "./dist/akili.js";
let plugins = [];

if(prod) {
  filename = "./dist/akili.min.js";

  plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }));
}

let config = {
  watch: !prod,
  bail: true,
  devtool: "inline-source-map",
  entry: "./src/akili.js",
  output: {
    filename: filename
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