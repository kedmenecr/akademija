const express = require('express')
const request = require('request')
const bodyParser = require('body-parser')

const app = express()

const heroesService = 'https://localhost:8888'

const threats = [
  {
      id: 1,
      displayName: 'Pisa tower is about to collapse.',
      necessaryPowers: ['flying'],
      img: 'tower.jpg',
      assignedHero: 0
  },
  {
      id: 2,
      displayName: 'Engineer is going to clean up server-room.',
      necessaryPowers: ['teleporting'],
      img: 'mess.jpg',
      assignedHero: 0
  },
  {
      id: 3,
      displayName: 'John will not understand the joke',
      necessaryPowers: ['clairvoyance'],
      img: 'joke.jpg',
      assignedHero: 0
  }
];

app.get('/threats', (req, res) => {
  console.log('Threats are here!!!');
  res.send(threats)
});

app.post('/assignment', (req, res)=>{
  request.post({
    headers: {'content-type': 'application/json'},
    url:`${heroesService}/hero/${req.body.heroId}`,
    body:`{
      "busy": true
    }`
  }, (err, heroResponse, body) => {
    if(!err){
      const threat = threat.find(subject => subject.id === threatId)
      threat.assignedHero = req.body.heroId
      res.status(200).send(threat)
    } else{
      res.status(400).send(`Hero service responded with issue: ${err}`)
    }
  })
})


app.use(bodyParser.json())

const port = 8889
app.listen(port, () => {
  console.log(`The app is listening on port: ${port}`)
})
