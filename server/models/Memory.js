const { Schema, model } = require('mongoose');
const moment = require('moment');

const memorySchema = new Schema({
    memoryOwner: {
        type: String,
        required: true,
        trim: true,
      },
    memoryText: {
        type: String,
        required: 'No empty memories!',
        minlength: 1,
        trim: true,
    },
    emotion: {
        type: String,
        required: true,
    },
    keyword: {
        type: String
    },
    date: {
        type: Date,
        // required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY hh:mm a')
    },
    memoryAuthor: {
        type: String,
        required: true,
        trim: true,
    }
})

const Memory = model('Memory', memorySchema)

module.exports = Memory