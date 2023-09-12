const User = require('../Models/UserModels');
const { createWebToken } = require('../Utils/SecretJWTToken')
const bcrypt = require('bcrypt')

module.exports.Signin = async (req, res, next) => {
    try {
        const { email, password } = req.body;

    if (!email && !password) {
        return res.json({ message: 'Email and Password fields are required' })
    }

    const user = await User.findOne({ email });
    if (!user) {
        return res.json({ message: 'Incorrect Email' })
    }
    const auth = await bcrypt.compare(password, user.password)

    if (!auth) {
        return res.json({ message: 'Incorrect Password' })
    }
    const token = createWebToken(user._id)
    res.cookie("token", token, {
        withCredentials: true,
        httpOnly: false,
    })

    res.status('201').json({meaage: 'User successfully Logged-in',success: true})
    next()
    } catch (error) {
        res.status('400').json({error});
        console.error(error);
    }
}