
const store = require('../store')

// const getPaceSuccess = function (data) {
// }

// let totalMin = hours * 60 + minutes + seconds / 60
// let pace = totalMin / miles
// let paceMin = Math.floor(pace)
// let paceSec = Math.round((pace - paceMin) * 60)
//
//   	if (paceSec < 10) {
//   		paceSec = "0" + paceSec;
// }



const displayDate = function () {
  let today = new Date()
  let date = (today.getMonth()+1) +'-'+ today.getDate() +'-'+ today.getFullYear()
  $('#displayDate').text(`${date}`)
}

const displayTime = function () {
  let today = new Date()
  // let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()

  let hours = today.getHours()

  let timeOfDay = 'AM'

  if (hours >= 12) {
    hours = hours - 12
    timeOfDay = 'PM'
  }
  if (hours === 0) {
    hours = 12
  }

  let minutes = today.getMinutes()
  if (minutes < 10) {
    minutes = '0' + minutes
  }

  let seconds = today.getSeconds()
  if (seconds < 10) {
    seconds = '0' + seconds
  }

  // good morning = 4am-11am
  // good afternoon = 12pm - 4pm
  // good evening = 5pm - 8pm
  // good night = 9pm - 11pm
  // go to bed = 12am - 3am

  let greeting = 'Welcome to my site'

  if (hours >= 4 && hours <= 11 && timeOfDay === 'AM') {
    // console.log('good morning')
    greeting = 'Good morning!'
  } else if (hours <= 4 && timeOfDay === 'PM') {
    // console.log('good afternoon')
    greeting = 'Good afternoon!'
  } else if (hours === 12 && timeOfDay === 'PM') {
    // console.log('good afternoon')
    greeting = 'Good afternoon!'
  }
  if (hours <= 8 && hours >= 5 && timeOfDay === 'PM') {
    console.log('good evening')
    greeting = 'Good evening'
  }
  if (hours >= 9 && hours <= 11 && timeOfDay === 'PM') {
    console.log('good night')
    greeting = 'Good night'
  }
  if (hours === 12 && timeOfDay === 'AM') {
    console.log('Go to bed')
    greeting = 'Go to bed'
  } else if (hours >= 1 && hours <= 3 && timeOfDay === 'AM') {
    console.log('go to bed')
    greeting = 'Go to bed'
  }

  let time = hours + ':' + minutes + ':' + seconds + ' ' + timeOfDay

  setTimeout(displayTime, 1000)
  $('#displayTime').text(`${time}`)
  // setTimeout(displayGreeting, 1000)
  $('#displayGreeting').text(`${greeting}`)
  // console.log(greeting)
}

// const sayNameSuccess = function (data) {
//   $('#displayName').text(`Hello, ${data}`)
//   // console.log(data)
// }

const displayCountdown = function () {
  let raceDay = new Date('August 18, 2019 08:00:00').getTime()
  // console.log('race day: ' + raceDay)
  let currentDate = new Date().getTime()
  // console.log('current date: ' + currentDate)
  let countdownTime = raceDay - currentDate
  // console.log('countdown time: ' + countdownTime)

  let days = Math.floor(countdownTime / (1000 * 60 * 60 * 24))
  // console.log('days: ' + days)
  let hours = Math.floor((countdownTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  // console.log('hours: ' + hours)
  let minutes = Math.floor((countdownTime % (1000 * 60 * 60)) / (1000 * 60))
  // console.log('minutes: ' + minutes)
  let seconds = Math.floor((countdownTime % (1000 * 60)) / 1000)
  // console.log('seconds' + seconds)
  setTimeout(displayCountdown, 1000)
  $('#displayCountdown').text(`Days until IRONMAN: ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`)
}


module.exports = {
  // getPaceSuccess,
  // getPaceFailure,
  //sayNameSuccess,
  displayDate,
  displayTime,
  displayCountdown
}
