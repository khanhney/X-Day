const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

const ApiSchema = new Schema({
    uuid: {
        type: String,
        unique: true,
        required: true
    },
    minor:  {
        type: String,
        unique: true,
        required: true
    },
    nameProduct:  {
        type: String,
        unique: true,
        required: true
    },
    priceProduct:  {
        type: String,
        unique: true,
        required: true
    },
    madeIn:  {
        type: String,
        unique: true,
        required: true
    },
    info:  {
        type: String,
        unique: true,
        required: true
    },
    img:  {
        type: String,
        unique: true,
        required: true
    },
});

const Api = mongoose.model('Api', ApiSchema);

module.exports = Api;