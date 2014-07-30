/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

app.import('vendor/ember-listview/list-view.prod.js');
app.import('vendor/velocity/jquery.velocity.min.js');
app.import('vendor/emberui/dist/named-amd/emberui.js', {
  exports: {
    'emberui': [
      'default'
    ]
  }
});

app.import('vendor/emberui/dist/emberui.css');

prefixCSS: {
  options: {
    browsers: ['last 2 versions']
  }
}


module.exports = app.toTree();
