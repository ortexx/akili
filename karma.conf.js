const path = require('path');

module.exports = function(config) {
  config.set({
    basePath: "",
    frameworks: ['mocha', 'chai'],
    files: [
      'test/main.js'
    ],
    plugins : [
      'karma-mocha',
      'karma-chai',
      'karma-mocha-reporter',
      'karma-chrome-launcher',
      'karma-coverage-istanbul-reporter',
      'karma-webpack',
      'karma-sourcemap-loader'
    ],
    preprocessors: {
      'test/main.js': ['webpack', 'sourcemap']
    },
    webpack: {
      devtool: 'inline-source-map',
      module: {
        rules: [
          {
            test: /\.js$/,
            include: [
              path.resolve('src')
            ],
            loader: 'istanbul-instrumenter-loader'
          },
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
              presets: ['es2015-node5', 'stage-0', 'stage-3']
            }
          }
        ]
      }
    },
    logLevel: config.LOG_ERROR,
    reporters: ['mocha', 'coverage-istanbul'],
    browsers : ['Chrome'],
    browserConsoleLogOptions: {
      terminal: true,
      level: ""
    },
    coverageIstanbulReporter: {
      reports: ['html'],
      dir : 'dist/coverage/'
    },
    singleRun: true,
    colors: true,
    port: 9999
  });
};