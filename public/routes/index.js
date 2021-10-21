const express = require('express')
const router = express.Router()
// const app = express(); here if i need it...

router.get('/', (req, res, next) => {
  res.render('index', { page: 'Home' })
})
router.get('/home', (req, res, next) => {
  res.render('index', { page: 'Home' })
})
router.get('/about', (req, res, next) => {
  res.render('index', { page: 'About' })
})
router.get('/contact-me', (req, res, next) => {
  res.render('notindex', { page: 'Contact Me' })
})
router.get('/LICENSE', (req, res) => {
  res.render('LICENSE', { page: 'LICENSE' })
})
router.get('/nav', (req, res) => {
  res.render('nav', { page: 'nav' })
})

module.exports = router
