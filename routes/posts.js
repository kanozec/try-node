const express = require('express')
const router = express.Router()

const checkLogin = require('../middlewares/check').checkLogin

router.get('/', function (req, res, next) {
  res.send('Main page')
})

router.get('/create', checkLogin, function (req, res, next) {
  res.send('Create article page')
})

router.post('/create', checkLogin, function (req, res, next) {
  res.send('Create article')
})

router.get('/:postId', function (req, res, next) {
  res.send('Article detail')
})

router.get('/:postId/edit', checkLogin, function (req, res, next) {
  res.send('Update article page')
})

router.post('/:postId/edit', checkLogin, function (req, res, next) {
  res.send('Update article')
})

router.get('/:postId/delete', checkLogin, function (req, res, next) {
  res.send('Delete article')
})

module.exports = router
