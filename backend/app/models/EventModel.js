const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EventSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    event: {
        key: {
            type: String,
            require: true
        },
        val: {
            type: String,
            require: true
        }
    },
    city: {
        key: {
            type: String,
            require: true
        },
        val: {
            type: String,
            require: true
        }
    }
})

module.exports = mongoose.model('Event', EventSchema)