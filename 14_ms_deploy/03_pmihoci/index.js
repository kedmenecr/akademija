const express = require("express")
const request = require("request")
const bodyParser = require("body-parser")

const port = 9093
const nextService = (process.argv[2]) ? process.argv[2] : 'http://35.234.76.207:9094/akademija/'

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.post('/akademija/:meme', (req, res) => {
    console.log(req.params.meme)
    let url;
    if (req.params.meme[req.params.meme.length - 1] === 'b') {
        url = `${nextService}${req.params.meme}c`
    } else {
        res.send('pa kak?')
        throw new Error("ERROR, NIJE DOBRO")
    }
    request.post(url).on('error', err => { console.log(err); res.send(err) })
})

app.listen(port)
console.log(`Listening on port ${port}`)