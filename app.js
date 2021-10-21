const express = require('express')
const indexRouter = require('./public/routes')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 7000

app.use(express.static(`${__dirname}/public`))
app.use('/', indexRouter)
app.use((req, res, next) => {
  res.status(404).render('404', { page: 'Page not found' })
})

app.set('views', `${__dirname}/public/views`)
app.set('view engine', 'ejs')

app.listen(port, console.log(`Server is listening at port ${port}.`))
