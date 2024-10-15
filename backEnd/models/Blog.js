const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    image: {
        type: String,
    },
    title: {
        type: String,
        required: true
    },
    subTitle: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    content: {
        type: String,
        required: true
    },
    author:{
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    // author: {
    //     type: String,
    //     required: true
    // }

}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema);