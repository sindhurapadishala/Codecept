const { setHeadlessWhen } = require('@codeceptjs/configure');
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://sandbox.marketplace.redhat.com/',
      browser: 'chrome',
      windowSize: "maximize",
      timeouts: {
        "script": 60000,
        "page load": 60000
      }
    },
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'CodeceptJS',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    wdio: {enabled: true,
        services: ['selenium-standalone']
      },  
    allure: {
      enabled: true,
      outputDir:'./allure-results'
      },
      stepByStepReport: {
        enabled: true,
      deleteSuccessful:false,
      screenshotsForAllureReport:true
    }
  }
}