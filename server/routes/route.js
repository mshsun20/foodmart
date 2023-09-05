const express = require('express')
const router = express.Router()
const conn = require('../dbsetup/dbconfig')

// Routes----------------------------------------------------------------
// router.get('/', (req, res) => {
//     res.send(`Server is Running.`)
// })

router.get('/getusr', (req, res) => {
    const sql = `select * from user`
    conn.query(sql, (err, result) => {
        if (err) throw err
        res.json({success:`All User Data fetched`, statuscode:500, data:result})
    })
})


module.exports = router