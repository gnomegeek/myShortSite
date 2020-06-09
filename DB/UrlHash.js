const mongoose = require('mongoose')
const validator = require('validator')

const Schema = mongoose.Schema

const UrlHashSchema = new Schema({
    url: {
        type: String,
        required: true,
        validate(value) {
            if ( !validator.isURL(value) ) {
                throw new Error("False URL")
            }
        }
    },
    hashedString: {
        type: String,
    }
})

const UrlHash = mongoose.model('UrlHash', UrlHashSchema)

module.exports = UrlHash