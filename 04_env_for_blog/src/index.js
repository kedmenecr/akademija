import express from "express"

import environment from "../utils/environment.js"


const app = express()









app.use(express.json())

app.use(express.urlencoded({ extended: true }))



// rewrite with enviroment

app.listen(environment.port, () => {
    console.log(`Started at PORT ${environment.port}`)

})