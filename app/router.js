import Ember from 'ember';
import config from './config/environment';
import resetScroll from 'website/mixins/reset-scroll';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,

  didTransition() {
    this._super(...arguments);

    window.ga('send', 'pageview', {
      'page': this.get('url'),
      'title': this.get('url')
    });
  }
});

Router.map(function() {
  this.route('work', { path: '/work' }, function() {
    this.route('massively');
    this.route('maintenanceassistant');
    this.route('guestlist');
  });
  this.route('services');
});

Ember.Route.reopen(resetScroll);

export default Router;
