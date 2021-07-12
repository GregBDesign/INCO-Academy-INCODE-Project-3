const express = require('express')
const app = express()
let sha256 = require('js-sha256')

let {users, schedules} = require('./data')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Welcome to our schedule website")
})

app.get('/users', (req, res) => {
    res.send(users)
})

app.post('/users', (req, res) => {
    const {firstname, lastname, email, password} = req.body
    let newUser = {"firstname": firstname, 
                "lastname": lastname,
                "email": email,
                "password": sha256(password)}
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
    res.send(schedules)
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