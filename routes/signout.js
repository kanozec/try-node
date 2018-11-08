const express = require('express')
const router = express.Router()

const checkLogin = require('../middlewares/check').checkLogin

router.get('/', checkLogin, function (res, req, next) {
  req.send('SignOut')
})

module.exports = router
