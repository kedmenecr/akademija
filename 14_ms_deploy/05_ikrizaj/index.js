const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()
let PORT = 9095;
const urls = 'http://32.234.76.207/9096'

app.use(bodyParser.json());

app.post('/akademija/:id', (req, res) => {
    let check = req.params.id;
    if(check[check.length - 1] === "d") {
        check = check + "e"
    }

    console.log('check :', check);

    request.post({
            header: {'content-type': 'application/json'},
            url: `${urls}/akademija/${check}`
        }, (err, response, body) => {
            if(err) {
                res.send(err)
            }
        }
    )
    res.send('bik')
}) 


app.listen(PORT, () => {
    console.log(`The server is running on PORT: ${PORT}`)
})


