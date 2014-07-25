/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var autoprefixer = require('broccoli-autoprefixer');
var p = require('ember-cli/lib/preprocessors');
var preprocessCss = p.preprocessCss;

var app = new EmberApp({
  name: require('./package.json').name,

  minifyCSS: {
    enabled: true,
    options: {}
  },

  getEnvJSON: require('./config/environment')
});

app.import('vendor/Velocity.js/jquery.velocity.min.js');

// emberui
app.import('vendor/emberui/dist/named-amd/emberui.js', {
  'emberui': ['default']
});
app.import('vendor/emberui/dist/emberui.css');
app.import('vendor/emberui/dist/default-theme.css');

prefixCSS: {
  options: {
    browsers: ['last 2 versions']
  }
}


module.exports = app.toTree();
