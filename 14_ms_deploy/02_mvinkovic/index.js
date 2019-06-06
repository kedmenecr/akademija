const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
const port = 9092
let myValue

let URL = "http://35.234.76.207:9093"

app.post('/akademija/:id', (req, res) => {
    let incomingParam = req.params.id
    if (incomingParam[incomingParam.length - 1] === "a") {
        myValue = incomingParam + "b"
        request.post({
            headers: { "content-type": 'application/json' },
            url: `${URL}/akademija/${myValue}`
        }, (err, responseAkademija, body) => {
            if (err) {
                console.log(err)
            }
        })

    } else {
        throw new Error("mvinkovic has exploded")
    }

    res.send("poslano2")
})

app.listen(port, () => console.log(`Example app listening on port ${port}`))