// this file is to connect server with mongoDB

// import mongoose
const mongoose = require('mongoose')

// define connection string
mongoose.connect('mongodb://localhost:27017/reminderApp', {
    useNewUrlParser: true
})

// to create the model
const User = mongoose.model('User', {
    uid: Number,
    uname: String,
    pwd: String
})

// export model
module.exports = {
    User
}