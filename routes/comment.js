const express = require('express')
const router = express.Router()
const checkLogin = require('../middlewares/check').checkLogin

router.post('/', checkLogin, function (req, res, next) {
  res.send('Create comment')
})

router.get('/:commentId/delete', checkLogin, function (req, res, next) {
  res.send('Delete comment')
})

module.exports = router
