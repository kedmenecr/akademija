const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const request = require('request');


const port = 9007 
const app = express();
app.use(bodyParser.json());


let portService = parseInt(port, 10) + 1
const postService = `http://localhost:${portService}`;

app.post('/test/:id', (req, res) => {
    console.log(`I am here..${port}`)
    console.log("Final", req.params.id)
});


console.log(`Heroes service listening on port ${port}`);
app.listen(port);
