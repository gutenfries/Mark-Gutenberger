import express from 'express'
const router = express.Router()

router.get('/', (req, res, next): void => {
	res.render('index', { page: 'Home' })
})
router.get('/home', (req, res, next): void => {
	res.render('index', { page: 'Home' })
})
router.get('/about', (req, res, next): void => {
	res.render('index', { page: 'About' })
})
router.get('/contact-me', (req, res, next): void => {
	res.render('index', { page: 'Contact Me' })
})
router.get('/LICENSE', (req, res): void => {
	res.render('LICENSE', { page: 'LICENSE' })
})
router.get('/nav', (req, res): void => {
	res.render('nav', { page: 'nav' })
})
export default router
