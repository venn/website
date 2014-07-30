`import Ember from 'ember'`

ApplicationRoute = Ember.Route.extend
  actions:
    showContact: ->
      controller = @controllerFor 'application'
      controller.set 'showContact', true

    hideContact: ->
      controller = @controllerFor 'application'
      controller.set 'showContact', false

`export default ApplicationRoute`
