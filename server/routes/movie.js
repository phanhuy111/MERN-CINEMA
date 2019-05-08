const express = require('express');
const router = express.Router();

const controller = require('../controllers/movie.controller');

// @route   GET api/movies
// @desc    Get all movies
// @access  Public
router.get('/', controller.getMovies);

// @route   POST api/movies
// @desc    Add new movie
// @access  Public
// router.post('/', controller.addMovie);

// @route   PATCH api/movies/checkout
// @desc    Update movie info
// @access  Public
// router.patch('/checkout', controller.checkout);

// export router to use on server.js *important!
module.exports = router;