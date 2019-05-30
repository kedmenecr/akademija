const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const request = require('request')

const port = process.argv.slice(2)[0]
const app = express()

app.use(bodyParser.json())

const heroesService = 'http://localhost:8081'

const threats = [
    {
        id: 1,
        displayName: 'Pisa tower is aboput to collapse.',
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

]