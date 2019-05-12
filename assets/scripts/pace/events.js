'use strict'

const getFormFields =
require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

// -------- SAY NAME -----------
const sayName = function (event) {
  event.preventDefault()
  console.log(event)
  const data = getFormFields(event.target)
  console.log(data)

  let nameInput = data.name
  let name = nameInput.charAt(0).toUpperCase() + nameInput.slice(1)
  console.log(name)

  if (name === 'Henry') {
    $('#displayName').text(`Hello my snuggle bum!`)
  } else if
  (name === 'Emma') {
    $('#displayName').text(`Hello ya stinkin PIRATE!`)
  } else if
  (name === 'Mom') {
    $('#displayName').text(`Happy mother's Day Moo Moo! I love you!`)
  } else {
    $('#displayName').text(`Hello, ${name}`)
  }
}

// ------------ GET PACE -------------

const getPace = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  // console.log('what is data: ' + data)

let distance = parseFloat(data.distance)
console.log('distance :' + distance)

let distanceUnit = data.distanceUnit
  console.log(distanceUnit)

  if (distanceUnit === 'mile') {
    console.log('miles: ' + distance)
  }

  if (distanceUnit === 'km') {
    distance = distance * .621371
    console.log('distance is km: ' + distance)
  }

let hours = parseFloat(data.hours)
  console.log("hours: " + hours)

let minutes = parseFloat(data.minutes)
    console.log("minutes: " + minutes)

let seconds = parseFloat(data.seconds)
console.log("Seconds: " + seconds)

let totalMin = ((hours * 60) + (minutes) + (seconds / 60))

console.log('total Min: ' + totalMin)

let pace = totalMin / distance
console.log('pace in total min: ' + pace)

let paceMin = Math.floor(pace)
console.log('pace min: ' + paceMin)

let paceSec = Math.round((pace - paceMin) * 60)
console.log('pace sec: ' + paceSec)

if (paceSec < 10) {
    paceSec = '0' + paceSec
}
$('#displayPace').text(paceMin + ':' + paceSec + ' per mile')
}

// -------- USER COUNTDOWN ---------

const userCountdown = function () {
  event.preventDefault()
  console.log(event)
  const data = getFormFields(event.target)
  console.log(data)

let userEvent = data.userEvent
console.log(userEvent)

let userRaceDay = new Date(data.userCountdown)
console.log('user race day: ' + userRaceDay)
let currentDate = new Date().getTime()
console.log('current date: ' + currentDate)
let userCountdownTime = userRaceDay - currentDate
console.log('countdown time: ' + userCountdownTime)

let days = Math.floor(userCountdownTime / (1000 * 60 * 60 * 24))
// console.log('days: ' + days)
let hours = Math.floor((userCountdownTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
// console.log('hours: ' + hours)
let minutes = Math.floor((userCountdownTime % (1000 * 60 * 60)) / (1000 * 60))
// console.log('minutes: ' + minutes)
let seconds = Math.floor((userCountdownTime % (1000 * 60)) / 1000)
// console.log('seconds' + seconds)

  setTimeout(userCountdown, 1000)
  $('#displayUserCountdown').text(`Days until ${userEvent}: ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`)
}

//   api.createExercise(data)
//     .then(ui.createExerciseSuccess)
//     .catch(ui.createExerciseFailure)
// }
//
// const onClearExercises = (event) => {
//   event.preventDefault()
//   ui.clearExercises()
// }
// const onGetPace = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   console.log(data)
//   api.getPace(data)
//     .then(ui.getPaceSuccess)
//     .catch(ui.getPaceFailure)
// }

// function raceTimes(pace) {
//     let races = [
//       {text : '1500 Meters', miles : 0.932056788},
//       {text : '1 Mile', miles : 1},
//       {text : '3K', miles : 1.86411358},
//       {text : '5K', miles : 3.10685596},
//       {text : '5 Miles', miles : 5},
//       {text : '10K', miles : 6.21371192},
//       {text : '10 Miles', miles : 10},
//       {text : '&frac12 Marathon', miles : 13.109375},
//       {text : 'Marathon', miles : 26.21875},
//     ];

const addHandlers = function () {
  // $('#getPace').on('submit', onGetPace)
  $('#name').on('submit', sayName)
  $('#getPace').on('submit', getPace)
  $('#userCountdown').on('submit', userCountdown)
}

module.exports = {
  addHandlers
}
