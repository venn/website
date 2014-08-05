`import Em from 'ember'`

ApplicationController = Em.Controller.extend
  showContact: false
  isSending: false
  isSent: false

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
