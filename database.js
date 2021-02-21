const mysql = require('mysql');
const connection = mysql.createPool({
    host: 'localhost',
    user: 'netuser',
    password: 'netpass',
    database: 'TVT20SPL'
});
module.exports = connection;