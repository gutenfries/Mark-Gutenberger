import express from 'express'
import indexRouter from './src/routes'
require('dotenv').config()

const app = express()
const port = process.env.PORT || 7000

app.use(express.static(`${__dirname}/src`))
app.use('/', indexRouter)
app.use((req, res, next): void => {
	res.status(404).render('404', { page: 'Page not found' })
})

app.set('views', `${__dirname}/src/views`)
app.set('view engine', 'ejs')

app.listen(port, (): void => {
	console.log(`Server running at port ${port}.`)
})
