const { Schema, model } = require('mongoose');

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
    }
})

const Memory = model('Memory', memorySchema)

module.exports = Memory