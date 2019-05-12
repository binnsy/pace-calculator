'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// const userEvents = require('./auth/events.js')
const events = require('./pace/events.js')
const ui = require('./pace/ui.js')

$(() => {
  events.addHandlers()
  // console.log('worked')
  // userEvents.addHandlers()
  ui.displayDate()
  ui.displayTime()
  ui.displayCountdown()
})

// $('.nav-buttons').hide()
// $('#reset').hide()
// $('.sign-out').hide()
// $('.row').hide()
// $('.change-password').hide()
// })
