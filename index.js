// importing express
const express = require('express')

// import dataservice
const dataService = require('./services/data.service')

// import jsonwebtoken
const jwt = require('jsonwebtoken')

// import cors (for connecting localhost 4200 & 3000)
const cors = require('cors')

// create app using express
const app = express()

// to use cors set origin
app.use(cors({
    origin: 'http://localhost:4200'
}))

// to parse JSON
app.use(express.json())

// application specific middleware
const logMiddleware = (req, res, next) => {
    console.log("Middleware");
    next()
}

// to resolve http request

// GET - to fetch data
app.get('/', (req, res) => {   // here '/' is the path (localhost:3000)
    res.send("GET METHOD")  // res stands for response, send means to send to the client
});

// POST - to create data
app.post('/', (req, res) => {
    res.send("POST METHOD")
});

// PUT - to modify/update completely data
app.put('/', (req, res) => {
    res.send("PUT METHOD")
});

// PATCH - to modify/update partially data
app.patch('/', (req, res) => {
    res.send("PATCH METHOD")
});

// DELETE - to delete data
app.delete('/', (req, res) => {
    res.send("DELETE METHOD")
});

// set port for server
app.listen(3000, ()=>{
    console.log("server started at port number: 3000");
})