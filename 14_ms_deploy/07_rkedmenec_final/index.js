const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
const port = 9097
let myValue

app.get('/akademija/:id', (req, res) => {
    if (parametar[parametar.length - 1] === "f") {
        console.log("Dobili smo", req.params.id)
        console.log('bravo ekipa')
    }

})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))