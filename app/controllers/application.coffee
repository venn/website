`import Ember from 'ember'`

ApplicationController = Ember.Controller.extend
  showContact: false
  isSending: false

  name: null
  email: null
  message: null

  isInvalid: Em.computed.or 'nameError', 'messageError', 'emailError'

  nameError: Em.computed.empty 'name'
  messageError: Em.computed.empty 'message'

  emailError: Em.computed 'email', ->
    email = @get 'email'
    emailpat = /^\S+@\S+\.\S+$/

    unless email and email.match(emailpat)
      return true



`export default ApplicationController`
