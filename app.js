const express = require('express')
const {addDays} = require('date-fns')
const app = express()
app.get('/', (request, response) => {
  const todayDate = new Date()
  const futureDate = addDays(todayDate, 100)

  let dateInDesiredFormat = `${futureDate.getDate()}/${futureDate.getMonth() + 1}/${futureDate.getFullYear()}`
  response.send(dateInDesiredFormat)
})

app.listen(3000)

module.exports = app
