const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const options = {
    discriminatorKey: 'type'
}

const userSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: String,
        enum: ['Active', 'Inactive'],
        default: 'Active'
    },
    blog: [{
        type: Schema.Types.ObjectId,
        ref: 'Blog'
    }],
    password: {
        type: String,
        required: true
    },
    refreshToken: String
},{timestamps: true, ...options})

module.exports = mongoose.model('User', userSchema)