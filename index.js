//Project 3B
const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const path = require('path')
const exphbs = require('express-handlebars')

let {users, schedules} = require('./data')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'))
app.set('public', path.join(__dirname, 'public'))

app.set('view engine', 'hbs')
app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/users', (req, res) => {
    res.render('users', {users})
})

app.post('/users', (req, res) => {
    const {firstname, lastname, email, password} = req.body
    const saltRounds = 10
    const salt = bcrypt.genSaltSync(saltRounds)
    const hash = bcrypt.hashSync(password, salt)
    let newUser = {"firstname": firstname, 
                "lastname": lastname,
                "email": email,
                "password": hash}
    users.push(newUser)
    res.send(newUser)
})

app.get('/users/:id', (req, res) => {
    const {id} = req.params
    res.send(users[id])
})

app.get('/users/:id/schedules', (req, res) => {
    const {id} = req.params
    const schedArr = []
    for(let i = 0; i < schedules.length; i++){
        schedules[i]["user_id"] == id ? schedArr.push(schedules[i]) : null
    }
    res.send(schedArr)
})

app.get('/schedules', (req, res) => {
    res.render('schedules', {schedules})
})

app.post('/schedules', (req, res) => {
    const {user_id, day, start_at, end_at} = req.body
    let newSched = {"user_id": user_id,
                "day": day,
                "start_at": start_at,
                "end_at": end_at}
    schedules.push(newSched)
    res.send(newSched)
})

app.listen(3000, () => {
    console.log("Project 3 on port 3000")
})