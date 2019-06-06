const express = require("express")
const request = require("request")
const bodyParser = require("body-parser")

const port = 9003
const nextService = 'http://localhost:9004/akademija/'

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.post('/akademija/:meme', (req, res) => {
    console.log(req.params.meme)
    let url = `${nextService}${req.params.meme} dela `
    request.post(url).on('error', err => { console.log(err); res.send(err) })
})

app.listen(port)
console.log(`Listening on port ${port}`)