//Express
const express = require('express')
const bodyParser = require('body-parser')

const userRoute = require('./routes/userRoute')

const app = express()
const port = 3000
app.use(bodyParser.urlencoded({ extended: false }))

userRoute(app)

app.get('/', (req, res) => res.send('Hello!'))

app.listen(port, () => console.log('Open in http://localhost:3000 for browser.'))