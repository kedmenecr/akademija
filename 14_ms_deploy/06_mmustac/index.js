const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');


const port = 9096;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());


const serviceToCall = 'http://35.234.76.207:9097/';
//e
app.post("/akademija/:id", (req, res) => {
    const parametar = req.params.id;
    if (parametar && typeof parametar === "string" && parametar[parametar.length - 1] === "e") {
        request.post({
            url: `${serviceToCall}/akademija/${parametar}f`
        })
        res.send({ response: "Poslano prema: " + serviceToCall + "akademija/abcdef" })
    } else {
        res.status(400).send({ errorMessage: "Servis nije zadovoljio uvjete. Za dodatna pitanja obratite se Marku Mustaču, Hvala!!" });
    }

})

console.log(`Service listening on port ${port}`);
app.listen(port);