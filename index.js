const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const connection = require('./model/databaseConnection');
require('dotenv').config();
require('express-async-errors');
const app = express();
const employeeRoute = require('./route/employeeRoute');
const atttendanceRoute = require('./route/attendanceRoute');
const reportRoute = require('./route/reportRoute');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

const port = process.env.SERVICE_PORT || 3000;

try {
    app.listen(port, () => {
        console.log(`server is running port ${port}`);
    })

} catch (error) {
    console.log(error);
}

app.get('/test-api', async (req, resp) => {
    // return resp.json({message: 'server is running perfectly!'});

    connection.query('SELECT * FROM attendance', (err, result, fields)=>{
        console.log(result);
        console.log(fields);

        return resp.status(200).json(result);
    });


});

//routes section

app.use('/api/v1/employee', employeeRoute);
app.use('/api/v1/attendance', atttendanceRoute);
app.use('/api/v1/report', reportRoute);



