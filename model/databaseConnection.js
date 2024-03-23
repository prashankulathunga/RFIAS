const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '1234',
    database: 'university',
})

let sql = "SELECT * FROM attendance WHERE attendance_id=1";

connection.execute(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
});


module.exports = connection.promise();
