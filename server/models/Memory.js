const { Schema, model } = require('mongoose');
const moment = require('moment');

const memorySchema = new Schema({
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
    date: {
        type: Date,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY hh:mm a')
    },
})

const Memory = model('Memory', memorySchema)

module.exports = Memory