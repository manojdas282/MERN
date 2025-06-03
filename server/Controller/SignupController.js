const User = require('../Models/UserModels');
const { createWebToken } = require('../Utils/SecretJWTToken')

module.exports.Signup = async (req, res, next) => {
    try {
        const { firstName, lastName, email, password, createdAt } = req.body

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({message: 'User already Exist'})
        }
        const user = await User.create({ firstName, lastName, email, password, createdAt })
        const token = createWebToken(user._id);
        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
        })
        res.status(201).json({ message: 'Sign up successfully', success: true })
        next();
    } catch (error) {
        res.status(500).json({error})
        console.error(error)
    }
}