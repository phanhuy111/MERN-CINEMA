const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create new schema
const movieSchema = new Schema({
    name: {
        type: String
    },
    director: {
        type: String
    },
    cast: {
        type: Array,
        default: []
    },
    genre: {
        type: Array,
        default: []
    },
    releaseDate: String,
    runningTime: String,
    language: String,
    rated: Object,
    decs: String,
    slug: String,
    thumbnail: String,
    cinema: {
        type: Array,
        default: []
    },
    time: {
        type: Array,
        default: []
    },
    date: {
        type: Array,
        default: []
    },
    price: String
});

// export schema to use on movie.controller.js
module.exports = Movie = mongoose.model('Movie', movieSchema, 'movies');