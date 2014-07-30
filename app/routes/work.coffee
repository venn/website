`import Ember from 'ember'`

WorkRoute = Ember.Route.extend
  afterModel: ->
    Ember.run.next @, ->
      $('body').scrollTop '0'

`export default WorkRoute`
