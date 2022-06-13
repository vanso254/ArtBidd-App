const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const morgan = require('morgan')

const app = express()

const {
    dirname
} = require('path')
var bodyParser = require('body-parser')



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

//Setting up the view folder
app.set('views', path.join(__dirname, 'views'))

//setting up a static folder in public
app.set(express.static(path.join(__dirname, 'public')))
    //Setting up the view engine for pug file
app.set('view engine', 'pug')
    //setting a path to the public folder
app.use('/css', express.static(path.resolve(__dirname, 'public/css')))
app.use('/js', express.static(path.resolve(__dirname, 'public/js')))
app.use('/img', express.static(path.resolve(__dirname, 'public/img')))

app.get('/', (req, res) => {
    res.render('index.pug')
})
app.get('/login', (req, res) => {
    res.render('Login.pug')
})

app.listen(3000, () => console.log(`Bidapp app listening on port http://localhost:${3000}`))