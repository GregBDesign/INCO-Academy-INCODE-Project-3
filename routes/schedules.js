const express = require('express')
const router = express.Router()
const db = require('../conn/conn')

router
    .route('/')
    .get(async (req, res) => {
        try {
            // Using an INNER JOIN method to retrieve schedule information and also the users name. The users name is then passed to the schedule template
            const schedSearch = await db.any("SELECT *, users.first_name, users.last_name FROM schedules INNER JOIN users on schedules.user_id = users.user_id")
            res.render('schedules', {schedSearch})
        } catch (e) {
            console.log(e)
        }
    })
    .post((req, res) => {
        const {user, day, start, end} = req.body
        db.none("INSERT INTO schedules (\"id\", \"user_id\", \"day\", \"start_time\", \"end_time\") VALUES (DEFAULT, $1, $2, $3, $4)", [user, day, start, end])
            .then( async () => {
                const schedSearch = await db.any("SELECT *, users.first_name, users.last_name FROM schedules INNER JOIN users on schedules.user_id = users.user_id")
                res.render('schedules', {schedSearch})
            }) 
            .catch((e) => {
                console.log(e)
            })
    })
    
router
    .route('/new')
    .get(async (req, res) => {
        try {
            const users = await db.any("SELECT * FROM users")
            res.render('newschedule' , {users})
        } catch (e) {
            console.log(e)
        }
    })
    
module.exports = router