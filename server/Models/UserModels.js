const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Your First Name is mandatory']
    },
    lastName: {
        type: String,
        required: [true, 'Your Last Name is mandatory']
    },
    email: {
        type: String,
        required: [true, 'Your Email is mandatory']
    },
    password: {
        type: String,
        required: [true, 'Your Password is mandatory']
    },
    craetedAt: {
        type: Date,
        default: new Date()
    }
})

userSchema.pre('save', async function() {
    this.password = await bcrypt.hash(this.password, 12)
})

module.exports = mongoose.model('User', userSchema)

