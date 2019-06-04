const express = require('express')
const app = express()


app.get('/', (req, res) => res.send('Hello World!'))

server = app.listen(3000, function(){
    var host = server.address.address;
    var port = server.address.port;
})

console.log("App slusa na http://%s:%s", host, port);