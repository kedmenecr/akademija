const express = require('express')
const bodyParser = require('body-parser')
const request = require("request")
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
const port = 9091
let URL = "http://35.234.76.207:9092"

app.get('/akademija/:id', (req, res) => {
    request.post({
        headers: { 'content-type': 'application/json' },
        url: `${URL}/akademija/jasama`,
    }, (err, responseAkademija, body) => {
        if (err) {
            res.send(err)
        }
    })
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))