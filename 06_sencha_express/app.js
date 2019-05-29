const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

// Express init
const app = express();

//MySQL init

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "test"
// });

db.connect(error => {
  if (error) {
    throw error;
  } else {
    console.log("Database connected with express.js!");
  }
});

//Get all data from database

app.get("/data", (req, res) => {
  let sql = (`SELECT * FROM test.animals, test.foods;`)
  let querry = db.query(sql, (error, results)=>{
    if (error) throw error
    res.send(results)
  })
});

app.put("/data/:id", (req, res) => {
  // let sql = (`SELECT * FROM test.animals, test.foods;`)
  let querry = db.query(sql, (error, results)=>{
    if (error) throw error
    res.send(results)
  })
});

app.post("/data", (req, res) => {
  // let sql = (`SELECT * FROM test.animals, test.foods;`)
  let querry = db.query(sql, (error, results)=>{
    if (error) throw error
    res.send(results)
  })
});

app.delete("/data/:id", (req, res) => {
  let sql = (`SELECT * FROM test.animals, test.foods;`)
  let querry = db.query(sql, (error, results)=>{
    if (error) throw error
    res.send(results)
  })
});

//Get individual food data from database 


// //Body-Parser middleware
// app.use(bodyParser.json())

const port = 9090;

app.listen(port, () => {
  console.log(`The server is listening on PORT: ${port}`);
});
