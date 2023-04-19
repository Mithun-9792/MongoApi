const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  runtime: {
    type: String,
  },
  genres: {
    type: [],
  },
  director: {
    type: String,
  },
  actors: {
    type: String,
  },
  plot: {
    type: String,
  },
  posterUrl: {
    type: String,
  },
  videoUrl: {
    type: String,
  },
});

module.exports = mongoose.model("Movie", movieSchema);
