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

export default Router;
