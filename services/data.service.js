// import jsonwebtoken
const jwt = require('jsonwebtoken')

// import db.js
const db = require('./db')

database = {
    2000: { uid: 2000, uname: "michael", pwd: "2000" },
    2001: { uid: 2001, uname: "jim", pwd: "2001" },
    2002: { uid: 2002, uname: "pam", pwd: "2002" },
    2003: { uid: 2003, uname: "dwight", pwd: "2003" }
}

//register function
const register = (uid, uname, pwd) => {
    return db.User.findOne({ uid })
        .then(user => {
            console.log(user);
            if (user) {
                return {
                    statusCode: 422,
                    status: false,
                    message: "User already exists, please Login"
                }
            }
            else {
                const newUser = new db.User({
                    uid, uname, pwd
                })
                newUser.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: "Successfully registered"
                }
            }
        })
}



// login function
const login = (uid, pwd) => {
    return db.User.findOne({
        uid,
        pwd
    })
        .then(user => {
            if (user) {
                currentUserName = user.uname
                currentUserId = uid

                // token generation
                token = jwt.sign({
                    currentUserId: uid
                }, 'supersecretkey123456')
                return {
                    statusCode: 200,
                    status: true,
                    message: "login success",
                    currentUserName,
                    currentUserId,
                    token
                }
            }
            else {
                return {
                    statusCode: 422,
                    status: false,
                    message: "Invalid credentials"

                }

            }

        })

}
module.exports = {
    login,
    register
}