import AjaxService from 'ember-ajax/services/ajax';
import config from 'website/config/environment';

export default AjaxService.extend({
  host: config.ajaxHost
});
