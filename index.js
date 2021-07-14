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

app.get('/users/new', (req, res) => {
    res.render('newuser')
})

app.get('/users/:id', (req, res) => {
    const {id} = req.params
    const user = users[id]
    res.render('user', {user})
})

app.get('/users/:id/schedules', (req, res) => {
    const {id} = req.params
    const schedArr = []
    for(let i = 0; i < schedules.length; i++){
        schedules[i]["user_id"] == id ? schedArr.push(schedules[i]) : null
    }
    res.render('schedule', {schedArr, id})
})

app.post('/users', (req, res) => {
    const {first, last, email, password} = req.body
    const saltRounds = 10
    const salt = bcrypt.genSaltSync(saltRounds)
    const hash = bcrypt.hashSync(password, salt)
    let newUser = {"user_id": users.length,
                "firstname": first, 
                "lastname": last,
                "email": email,
                "password": hash}
    users.push(newUser)
    res.render('users', {users})
})

app.get('/schedules', (req, res) => {
    res.render('schedules', {schedules})
})

app.get('/schedules/new', (req, res) => {
    res.render('newschedule' , {users})
})

app.post('/schedules', (req, res) => {
    const {user, day, start, end} = req.body
    let newSched = {"user_id": user,
                "day": day,
                "start_at": start,
                "end_at": end}
    schedules.push(newSched)
    res.render('schedules', {schedules})
})

app.listen(3000, () => {
    console.log("Project 3 on port 3000")
})