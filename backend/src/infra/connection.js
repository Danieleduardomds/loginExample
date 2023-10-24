const mysql = require('mysql2/promise');
require('dotenv').config();

const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
});

connection.getConnection((err, connectionStart) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    // Perform database operations here
    // Don't forget to release the connection when you're done.
    connectionStart.release();
});

module.exports = connection;