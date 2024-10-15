const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User')
const readersSchema = User.discriminator('Reader', new Schema({
    username: {
        type: String
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    country: {
        type: String
    }
}));

module.exports = readersSchema;