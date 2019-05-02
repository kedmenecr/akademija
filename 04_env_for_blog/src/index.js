import express from "express"

import environment from "./utils/environment"
import loger from "./utils/loger"
import buildConfig from "./config/build-config"

const app = express()








buildConfig()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.listen(environment.port, () => {
    loger.log("Started at PORT ", environment.port)


})