const mysql = require('mysql')


const host = process.env.HOST || 'localhost'
const user = process.env.USER || 'root'
const password = process.env.PASSWORD || ''
const database = process.env.DATABASE || 'foodmartdb'

// DB Connection
const conn = mysql.createConnection({
    host, user, password, database, multipleStatements: true
})
conn.connect((err) => {
    if (err) throw err
    console.log('Successfully Connected to Database...')
})

module.exports = conn
