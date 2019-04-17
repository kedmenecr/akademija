const express = require("express")
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/user", (request, response) => {
    response.send("Hello from get")
})

app.get("/user/:id", (request, response) => {
    console.log(request.params.id)
    response.send("Hello from get")
})


app.put("/user", (request, response) => {
    let serachForId = request.body.id
    // search item in database with ID = 3
    // run query which will update the item
    // UPDATE
    response.send("Hello from put")
})

app.post("/user", (request, response) => {
    console.log(request.body)
    response.send("Hello from post")
})

app.delete("/user", (request, response) => {
    response.send("Hello from delete")
})



app.put('/drink/:id', (req, res) => {
    res.send(req.params.id)
})

app.post('/drink/:id', (req, res) => {
    let puter = parseInt(req.params.id, 10)
    res.status(puter).send(puter.toString())
})

app.listen(9090, () => {
    console.log("listening on 9090")
})