const config = require('../config')
const store = require('../store')

const getPace = function (data) {
  // console.log(data)
  return $.ajax({
    url: config.apiUrl + 'pace',
    method: 'POST',
    headers:
    data
    //console.log(data)
  })
}

module.exports = {
  getPace
}
