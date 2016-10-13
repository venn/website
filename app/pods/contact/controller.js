import Ember from 'ember';

export default Ember.Controller.extend({
  ajax: Ember.inject.service(),

  isSending: false,
  isSent: false,

  name: null,
  email: null,
  message: null,

  isInvalid: Ember.computed.or('nameError', 'messageError', 'emailError'),

  nameError: Ember.computed.empty('name'),
  messageError: Ember.computed.empty('message'),

  emailError: Ember.computed('email', function() {
    let email = this.get('email');
    let emailpat = /^\S+@\S+\.\S+$/;

    if (!(email && email.match(emailpat))) {
      return true;
    }
  }),

  actions: {
    sendEmail() {
      if (this.get('isInvalid')) {
        return;
      }

      this.set('isSending', true);

      const data = {
        contact: {
          lead_name: this.get('name'),
          lead_email: this.get('email'),
          message: this.get('message')
        }
      };

      this.get('ajax').request('/contacts', {
        method: 'POST',
        data: data

      }).then((response) => {
        this.set('isSending', false);

      }, (error) => {
        alert('There was an error sending your email. Please send it to us directly at hello@venn.lc');

      });
    }
  }
});
