const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const port = process.argv.slice(2)[0];
const app = express();

app.use(bodyParser.json());

const heroesService = 'http://localhost:8888';


app.get('/bug', (req, res) => {
    console.log('Returning threats list');
    throw new Error('listId does not exist');
    res.send("Dela");
});


app.use('/img', express.static(path.join(__dirname, 'img')));

console.log(`Threats service listening on port ${port}`);
app.listen(port);