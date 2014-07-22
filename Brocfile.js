/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

app.import('vendor/emberui/dist/named-amd/emberui.js', {
    'emberui': ['default']
});
app.import('vendor/emberui/dist/emberui.css');
app.import('vendor/emberui/dist/default-theme.css');

module.exports = app.toTree();
