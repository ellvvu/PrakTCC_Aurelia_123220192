// config/database.js
const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
    host: '104.198.189.185', // MySQL server host
    user: 'root',      // MySQL username
    password: '',      // MySQL password
    database: 'notes_app', // Database name
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Export the pool for use in other files
module.exports = pool.promise();