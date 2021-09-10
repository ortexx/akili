const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = function(config) {
  let conf = {
    basePath: "",
    frameworks: ['mocha', 'chai'],
    files: [
      'test/main.js',
      { pattern: 'test/img/*', included: false, served: true }
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
      watch: false,
      mode: 'none',
      devtool: 'inline-source-map',
      plugins: [new ESLintPlugin({ failOnError: true })],
      module: {
        rules: [
          {
            test: /\.js$/,
            include: [
              path.resolve('src')
            ],
            loader: '@jsdevtools/coverage-istanbul-loader',
            options: {
              esModules: true
            }
          },          
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
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
    customLaunchers: {
      ChromeActions: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    coverageIstanbulReporter: {
      reports: [process.env.GITHUB_ACTIONS? 'lcov': 'html'],
      dir : 'coverage/'
    },
    client: {
      mocha: {
        timeout: 10000
      }
    },
    singleRun: true,
    colors: true,
    port: 9999
  };

  if(process.env.GITHUB_ACTIONS){
    conf.browsers = ['ChromeActions'];
  }

  config.set(conf);
};