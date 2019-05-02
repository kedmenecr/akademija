import express from 'express'

import environment from './utils/environment'
import loger from './utils/loger'
import buildConfig from './config/build-config'
import routing from './config/routing'

const app = express()








buildConfig()

routing.forEach(routeModule => {
	app.use(routeModule.route, routeModule.module)
})





app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.listen(environment.port, () => {
	loger.log('Started at PORT ', environment.port)


})