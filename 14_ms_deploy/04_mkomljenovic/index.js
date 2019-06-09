const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const URL = `http://35.234.76.207:9095`

app.post('/akademija/:id', (req, res) => {

  const lastURL = `${URL}/akademija/${req.params.id}`
  let newURL;
  if(lastURL.slice(-1) === 'c'){
    newURL = lastURL + 'd'; 
    request.post({
    headers: {'content-type': 'application/json'},
    url: `${URL}/akademija/${req.params.newURL}`
    })
    res.status(200).send('It works at mkomljenovic!')
  } else {
    console.log('It fails at mkomljenovic!');
  }
}) 


const port = 9094
app.listen(port, $ => console.log(`The app is running on port: ${port}`))


 