`import Ember from 'ember'`
`import ajax from 'ic-ajax'`

ApplicationRoute = Ember.Route.extend
  actions:
    showContact: ->
      controller = @controllerFor 'application'
      controller.set 'showContact', true

    hideContact: ->
      controller = @controllerFor 'application'
      controller.setProperties
        'showContact': false
        'isSent': false
        'email': null
        'name': null
        'message': null

    sendEmail: ->
      controller = @controllerFor 'application'

      return if controller.get 'isInvalid'

      controller.set 'isSending', true

      form =
        name: controller.get 'name'
        email: controller.get 'email'
        message: controller.get 'message'

      ajax
        url: "#{window.VennWebsiteENV.API_BASE}/contacts",
        type: 'POST',
        dataType: 'json',
        data: form

      .then (payload) =>
        controller.set 'isSending', false

      , (error) ->
        alert 'There was an error sending your email. Please send it to us directly at hello@venn.lc'
        Ember.RSVP.reject (try JSON.parse error.jqXHR.responseText) || {}


`export default ApplicationRoute`
