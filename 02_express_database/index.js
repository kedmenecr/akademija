const express = require('express')
const mysql = require('mysql')
const cors = require("cors")

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'blog'
})

const app = express()

app.use(cors())

db.connect((err) => {
    if (err) {
        throw err
    }
    console.log('MySQL connected...')
})


app.get('/user', (req, res) => {

    db.query('SELECT * from user', (error, results) => {
        if (error) throw error;
        res.send(results)
    });
})

app.get('/comment', (req, res) => {

    db.query('SELECT * from comment', (error, results) => {
        if (error) throw error;
        res.send(results)
    });
})

app.get('/post', (req, res) => {

    db.query('SELECT * from post', (error, results) => {
        if (error) throw error;
        res.send(results)
    });
})

app.get('/role', (req, res) => {

    db.query('SELECT * from role', (error, results) => {
        if (error) throw error;
        res.send(results)
    });
})

app.get('/tag', (req, res) => {

    db.query('SELECT * from tag', (error, results) => {
        if (error) throw error;
        res.send(results)
    });
})
























app.listen(process.env.PORT, () => {
    console.log(`The server is running on port ${process.env.PORT}`)
})
// //Creating the table

// // app.get('/createposttable', (req, res) => {
// //     // Create a variable that will be executed in query
// //     let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))'
// //     db.query(sql, (err, result) => {
// //         if (err) throw err
// //         console.log(result)
// //         res.send('Post table created')
// //     })
// // })

// //Insert post

// app.get('/addpost1', (req, res) => {
//     // First we need to create a post and assign it to the variable
//     let post = {
//         title: 'This is post one',
//         body: 'This is post number one'
//     }
//     let sql = 'INSERT INTO posts SET ?' // ? is a placeholder
//     let query = db.query(sql, post, (err, result) => {
//         if (err) throw err
//         console.log(result)
//         res.send('Post 1 is created...')
//     })
// })

// //Fetching posts

// app.get('/fetchposts', (req, res) => {
//     let sql = 'SELECT * FROM posts'
//     let query = db.query(sql, (err, results) => {
//         if (err) throw err
//         console.log(results)
//         res.send('Posts are fetched...')
//     })
// })