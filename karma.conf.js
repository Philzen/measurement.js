// Karma configuration
// Generated on Tue Apr 01 2014 17:31:44 GMT+0200 (CEST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'requirejs'],


    // list of files / patterns to load in the browser
    files: [
      'test-main.js',
      {pattern: '*.js', included: false},
      {pattern: 'test/**/*Spec.js', included: false}
    ],


    // list of files to exclude
    exclude: [
      '.git', 'node_modules'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul via Ibrik)
      'measurement.js': ['jshint','coverage']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['coverage', 'progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    jshint: {
        options: {
//            reporter: require('jshint-stylish'),
            curly: true,
            eqeqeq: true,
            immed: true,
            latedef: true,
            newcap: true,
            noarg: true,
            sub: true,
            undef: true,
            boss: true,
            devel: true,
            eqnull: true,
            browser: true,
            globals: {
                cordova: true,
                jQuery: true
            }
        }
    },

    coverageReporter: {
      dir : './coverage/',
      reporters:[
          {type: 'lcov'},
          {type: 'text', file: 'coverage.txt'},
          {type: 'text-summary', file: 'coverage-summary.txt'}
      ]
    },

    coveralls: {
        options: {
            debug: false,
            coverage_dir: './coverage/*',
            dryRun: false,
            force: true
        }
    }
  });
};
