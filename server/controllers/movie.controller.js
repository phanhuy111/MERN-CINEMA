const Movie = require('../models/movie.model');

// Get all movies
module.exports.getMovies = async (req, res) => {
	const movies = await Movie.find();
	res.json(movies);
};
