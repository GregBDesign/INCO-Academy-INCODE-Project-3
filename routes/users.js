const express = require('express')
const router = express.Router()
const db = require('../conn/conn')
const bcrypt = require('bcrypt')

// dbMsg is an error object to pass to specific schedules for individual users (line 61). This message is displayed if there are no results from DB
const dbMsg = {error: "No values returned"}

router
    .route('/')
    .get(async (req, res) => {
        try {
            const userSearch = await db.any("SELECT * FROM users");
            res.render('users', {userSearch})
        } catch (e) {
            console.log(e)
        }
    })
    .post((req, res) => {
        const {first, last, email, password} = req.body
        const saltRounds = 10
        const salt = bcrypt.genSaltSync(saltRounds)
        const hash = bcrypt.hashSync(password, salt)
        db.none("INSERT INTO users (\"user_id\", \"first_name\", \"last_name\", \"email\", \"password\") VALUES (DEFAULT, $1, $2, $3, $4)", [first, last, email, hash])
            .then( async () => {
                // Once the information is submitted to the DB the below request retrieves all users from DB
                const userSearch = await db.any("SELECT * FROM users");
                res.render('users', {userSearch})
            })
            .catch((e) => {
                console.log(e)
            })
    })

router
    .route('/new')
    .get((req, res) => {
        res.render('newuser')
    })

router
    .route('/:id')
    .get(async (req, res) => {
        const {id} = req.params
        try {
            const userSearch = await db.one("SELECT * FROM users WHERE user_id = $1", [id])
            res.render('user', {userSearch})
        } catch (e) {
            console.log(e)
            res.render('userfail')
        }
    })

router
    .route('/:id/schedules')
    .get(async (req, res) => {
        const {id} = req.params
        try {
            const sched = await db.any("SELECT * FROM schedules WHERE user_id = $1", [id])
            if(sched.length == 0){
                res.render('schedule', {dbMsg})
            } else {
                res.render('schedule', {sched, id})
            }
        } catch (e) {
            console.log(e)
        }
    })

module.exports = router