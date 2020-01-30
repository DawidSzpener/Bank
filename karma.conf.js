module.exports = function (config) {
  config.set({
      basePath: '',
      frameworks: ['jasmine'],
      files: [
          'src/**/*.js',
          'spec/**/*.js'
      ],
      preprocessors: {
        'src/**/*.js' : ['coverage']
      },
      plugins: [
          'karma-coverage-istanbul-reporter',
          'karma-jasmine',
          'karma-phantomjs-launcher',
          'karma-coverage'
      ],
      reporters: ['progress', 'coverage', 'coverage-istanbul'],
      port: 9878,
      colors: true,
      logLevel: config.LOG_DEBUG,
      autowatch: true,
      browsers: ['PhantomJS'],
      singleRun: false,
      concurrency: Infinity,
      captureTimeout: 10000,
      browserDisconnectTolerance: 3,
      browserDisconnectTimeout: 10000,
      browserNoActivityTimeout: 10000,
      coverageReporter: {
          includeAllSources: true,
          dir: 'coverage/',
          reporters: [
              { type: "html", subdir: "html" },
              { type: 'text-summary' }
          ]
      }
  });
};