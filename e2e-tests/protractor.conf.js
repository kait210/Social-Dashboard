exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    // 'user_registration_scenario.js', Only need to run once to avoid duplicate registration.
    'user_login_scenario.js',
    'gmail_scenarios.js',
    'twitter_scenarios.js',
    'instagram_scenarios.js',
    'facebook_scenarios.js',
    'user_logout_scenario.js'
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
