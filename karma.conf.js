module.exports = function (config) {
  config.set({
      basePath: '',
      frameworks: ['jasmine'],
      files: [
          'jasmine/src/**/*.js',
          'jasmine/spec/**/*.js'
      ],
      preprocessors: {
        'jasmine/src/**/*.js' : ['coverage']
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