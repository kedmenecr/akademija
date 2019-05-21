// import express from 'express'

// import environment from './utils/environment'
// import loger from './utils/loger'
// import buildConfig from './config/build-config'
// import routing from './config/routing'

// const app = express()








// buildConfig()

// routing.forEach(routeModule => {
// 	app.use(routeModule.route, routeModule.module)
// })





// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))


// app.listen(environment.port, () => {
// 	loger.log('Started at PORT ', environment.port)


// })


const bodyParser = require('body-parser')

const express = require('express')
const app = express()
app.use(bodyParser())

const environment = require('./utils/environment')


const applyBuild = require('./config/build-config')
applyBuild()

const routing = require('./config/routing')
routing.forEach(routeModule => {
	app.use(routeModule.route, routeModule.module)
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.listen(environment.port || 8005, () => console.log(`Server is running on port ${environment.port}!`))