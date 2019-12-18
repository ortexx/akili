const path = require('path');

module.exports = function(config) {
  let conf = {
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
      watch: false,
      mode: 'none',
      module: {
        rules: [
          {
            enforce: "pre",
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'eslint-loader',
            options: { 
              failOnError: true 
            }
          },
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
              presets: ['akili']
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
    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    coverageIstanbulReporter: {
      reports: [process.env.TRAVIS? 'lcov': 'html'],
      dir : 'coverage/'
    },
    singleRun: true,
    colors: true,
    port: 9999
  };

  if(process.env.TRAVIS){
    conf.browsers = ['Chrome_travis_ci'];
  }

  config.set(conf);
};