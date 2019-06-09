const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const port = 9005 
const app = express();

app.use(bodyParser.json());

let portService = parseInt(port,10) + 1
const postService = `http://localhost:${portService}`;


app.post('/test/:id', (req, res) => {
    console.log(`I am here..${port}`)
     setTimeout(() => {
        request.post({
            headers: { 'content-type': 'application/json' },
            url: `${postService}/test/${req.params.id}`
        }, (err, heroResponse, body) => {
            if (err) {
                res.send(err)
            }
        });
    }, 3000);
     

});


console.log(`Threats service listening on port ${port}`);
app.listen(port);
