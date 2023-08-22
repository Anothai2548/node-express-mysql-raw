const mysql = require("mysql2")
const dbConstfig = require("../config/db.config.js")

const connection = mysql.createConnection({

    host: dbConstfig.HOST,
    user: dbConstfig.USER,
    paassword: dbConstfig.PASSWORD,
    database: dbConstfig.DB
})

connection.connect(error => {
    if(error) throw error
    console.log("Successfully connected to the database.")
})

module.exports = connection