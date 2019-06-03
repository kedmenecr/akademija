const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
var cors = require("cors")

// Express init
const app = express();

//MySQL init

const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "sencha"
});

db.connect(error => {
	if (error) {
		throw error;
	} else {
		console.log("Database connected with express.js!");
	}
});

//Body-Parser middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

//Cors middleware
app.use(cors())

//Valuable data combined
app.get("/data/all", (req, res) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	let sql = (`SELECT productId, productName,category.categoryName, products.price
							FROM products
							RIGHT JOIN category
							ON products.categoryId = category.categoryId;`)
	let query = db.query(sql, (error, results) => {
		if (error) throw error
		res.send(results)
	})
});

//**CATEGORY DATA**//

// Get all category data

app.get("/data/category/all", (req, res) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	let sql = (`SELECT * FROM sencha.category`)
	let query = db.query(sql, (error, results) => {
		if (error) throw error
		res.send(results)
	})
});

//Post new category

app.post("/data/category/new", function (req, res) {
	
	let newCategory = req.body
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

		db.query("INSERT INTO category SET ?",
		newCategory, function (error, results, fields) {
		if (error) throw error;
		console.log(results.categoryId); // Auto increment id
		res.end(JSON.stringify(results));
	});
});

//Edit a category by ID

app.put("/data/category/:id", (req, res) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	var newTitle = req.body.categoryName
	let sql = (`UPDATE category SET categoryName = '${newTitle}' WHERE categoryId = ${req.params.id};`)
	let query = db.query(sql, (error, results) => {
		if (error) throw error
		res.send(JSON.stringify(results))
	})
});

//Delete  category data

app.delete("/data/category/:id", (req, res) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

	let sql = (`DELETE FROM category WHERE categoryId = ${req.params.id};`)
	let query = db.query(sql, (error, results) => {
		if (error) throw error
		res.send(JSON.stringify(results))
	})
});

//**PRODUCTS DATA**//

//Get all products data

app.get("/data/products/all", (req, res) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	let sql = (`SELECT * FROM sencha.products`)
	let query = db.query(sql, (error, results) => {
		if (error) throw error
		res.send(results)
	})
});

//Post new products

app.post('/data/products/new', function (req, res) {
	
	let newProduct = req.body;
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

		db.query("INSERT INTO products SET ?",
		newProduct, function (error, results, fields) {
		if (error) throw error;
		console.log(results.categoryId); // Auto increment id
		res.end(JSON.stringify(results));
	});
});

// Edit a products data

app.put("/data/products/:id", (req, res) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	let newProductName = req.body.productName
	let newProductPrice = req.body.price
	let sql = (`UPDATE products SET productName = '${newProductName}', price = ${newProductPrice} WHERE productId = ${req.params.id};`)
	let query = db.query(sql, (error, results) => {
		if (error) throw error
		res.send(JSON.stringify(results))
	})
});


//Delete data
app.delete("/data/products/:id", (req, res) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

	let sql = (`DELETE FROM products WHERE productId = ${req.params.id};`)
	let query = db.query(sql, (error, results) => {
		if (error) throw error
		res.send(JSON.stringify(results))
	})
});


const port = 9090;

app.listen(port, () => {
	console.log(`The server is listening on PORT: ${port}`);
});
