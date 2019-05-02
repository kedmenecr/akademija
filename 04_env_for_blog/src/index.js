import express from "express"

import environment from "../utils/environment"
import loger from "../utils/loger"


const app = express()


app.use(express.json())

app.use(express.urlencoded({ extended: true }))



// rewrite with enviroment

app.listen(environment.port, () => {
    loger.log("Started at PORT ", environment.port)


})