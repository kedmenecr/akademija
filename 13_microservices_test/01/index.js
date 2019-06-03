const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const request = require('request');


const port = process.argv.slice(2)[0];
const app = express();
app.use(bodyParser.json());

let portService = parseInt(port, 10) + 1
const postService = `http://localhost:${portService}`;

app.get('/test/:id', (req, res) => {
    request.post({
        headers: { 'content-type': 'application/json' },
        url: `${postService}/test/${req.params.id}`
    }, (err, heroResponse, body) => {
        if (err) {
            res.send(err)
        } else {
            res.send("Sent!")
        }
    });
    res.send("sent")
});


console.log(`Heroes service listening on port ${port}`);
app.listen(port);