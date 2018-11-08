const express = require('express')
const router = express.Router()

const checkNotLogin = require('../middlewares/check').checkNotLogin

router.get('/', checkNotLogin, function (req, res, next) {
  res.send('SignUp page')
})

router.post('/', checkNotLogin, function (req, res, next) {
  res.send('SignUp')
})

module.exports = router
