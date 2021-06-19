const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());

app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT,GET,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.post('/api/fullname', function (req, res) {

    let bodyOfTheRequest = req.body;

    let fullName = `The full name is ${bodyOfTheRequest.firstname} ${bodyOfTheRequest.lastname}`

    //THEN I JUST SEND THE RESPONSE
    res.send({
            "status": "OK",
            "message": fullName
        }
    );
})

app.get('/api/hi', (req, res) => {
    res.send({
        "status": "OK",
        "message": 'hi there'
    })
})
app.listen(port, () => {
    console.log(`RESTFUL API LISTENING AT THE PORT ${port} `);
})
