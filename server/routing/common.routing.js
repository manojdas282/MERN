const { Signup } = require("../Controller/SignupController")
const { Signin } = require("../Controller/SigninController")
const {UserValidation} = require("../Middleware/AuthValidator")
const express = require('express');

const router = express.Router()

router.post('/sign-up', Signup)
router.post('/sign-in', Signin)
router.post('/', UserValidation)

module.exports = router