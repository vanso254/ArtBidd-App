var express = require('express')
const port = 3000
var path = require('path')
var http = require('http')

const {
    dirname
} = require('path')
const hostname = '127.0.0.1'
var bodyParser = require('body-parser')


//Initializing the app
var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

//Setting up the view folder
app.set('views', path.join(__dirname, 'views'))

//Setting up the view engine for pug file
app.set('view engine', 'pug')


app.get('/', (req, res) => {
    res.render('index.pug')
})

app.listen(port, () => console.log(`Bidapp app listening on port ${port}!`))