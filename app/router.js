import Ember from 'ember';

var Router = Ember.Router.extend({
  location: VennWebsiteENV.locationType
});

Router.map(function() {
  this.resource('work', { path: '/work' }, function() {
    this.route('massively');
    this.route('maintenanceassistant');
    this.route('guestlist');
  });
});

Router.reopen({
  notifyGoogleAnalytics: function() {
    return window.ga('send', 'pageview', {
      'page': this.get('url'),
      'title': this.get('url')
    });
  }.on('didTransition')
});

export default Router;
