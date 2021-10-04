//Project 3C
require('dotenv').config()
const express = require('express')
const app = express()
const db = require('./conn/conn')
const path = require('path')
const exphbs = require('express-handlebars')

const users = require('./routes/users')
const schedules = require('./routes/schedules')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'))
app.set('public', path.join(__dirname, 'public'))

// Set Handlebars as the templating engine
app.set('view engine', 'hbs')
app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}))

// Use 'users' and 'schedules' routes w/ Express Router
app.use("/users", users)
app.use("/schedules", schedules)

// Home route
app.get('/', (req, res) => {
    res.render('home')
})

const port = process.env.PORT || 3000

app.listen(3000, () => {
    console.log("Project 3 on port 3000")
})