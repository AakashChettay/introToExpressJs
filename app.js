const express = require('express')
const {addDays, format} = require('date-fns')

const myapp = express()

myapp.get('/', (req, res) => {
  const futureDate = addDays(new Date(), 100)
  const formattedDate = `${futureDate.getDate()}/${
    futureDate.getMonth() + 1
  }/${futureDate.getFullYear()}`
  res.send(formattedDate)
})

myapp.listen(3000)

module.exports = myapp
