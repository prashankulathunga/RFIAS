const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
require('dotenv').config();
const app = express();


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
    return resp.json({message: 'server is running perfectly!'});

});

//routes section






