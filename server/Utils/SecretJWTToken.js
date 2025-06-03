require('dotenv').config();

const jwt = require('jsonwebtoken')

module.exports.createWebToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET_KEY, {
        expiresIn: '1h'
    })
}