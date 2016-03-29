exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    'facebook_scenarios.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8000/app/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  onPrepare: function () {
    protractor.loginHelpers = require('./login-helpers.js')
  }
};
