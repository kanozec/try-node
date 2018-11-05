const path = require('path')
const express = require('express')
const app = express()
const indexRouter = require('./routes/index.js')
const userRouter = require('"./routes/users')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(function (req, res, next) {
  console.log('1')
  next()
})

app.use(function (req, res, next) {
  console.log('2')
  next(new Error('haha'))
})

app.use(function (req, res, next) {
  console.log('3')
  res.status(200).end()
})

app.use(function (err, req, res, next) {
  console.log(err.stack)
  res.status(500).send('Something broke!')
})

app.use('/', indexRouter)
app.use('/users', userRouter)

app.listen(3000)
