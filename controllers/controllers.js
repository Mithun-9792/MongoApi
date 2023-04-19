const Movies = require("../models/movie");

const getallmoviestest = async (req, res) => {
  const { title, director, actors, genres } = req.query;
  const queryObject = {};

  if (title) {
    queryObject.title = { $regex: title, $options: "i" };
  }
  if (genres) {
    queryObject.genres = { $regex: genres, $options: "i" };
  }
  if (director) {
    queryObject.director = { $regex: director, $options: "i" };
  }
  if (actors) {
    queryObject.actors = { $regex: actors, $options: "i" };
  }
  const movies = await Movies.find(queryObject).select("title runtime");
  res.status(200).json({ movies });
};
const getallmovies = async (req, res) => {
  const movies = await Movies.find({});
  res.status(200).json({ movies });
};
const getalltests = async (req, res) => {
  const movies = await Movies.find(req.query).sort("runtime");
  res.status(200).json({ movies });
};
const postMovies = async (req, res) => {
  // console.log(req);
  const movies = await Movies.create({
    title: req.body.title,
    actors: req.body.actors,
    genres: req.body.genres,
    plot: req.body.plot,
    year: req.body.year,
    director: req.body.director,
    runtime: req.body.runtime,
    videoUrl: req.body.videoUrl,
    posterUrl: req.body.posterUrl,
  });
  res.json(movies);
};

const deleteMovie = async (req, res) => {
  const movies = await Movies.deleteOne({ _id: req.params.id });
  res.send(movies);
};
const getmoviebyid = async (req, res) => {
  const movies = await Movies.findOne({ _id: req.params.id });
  res.send(movies);
};

const searchMovie = async (req, res) => {
  const movies = await Movies.find({ $text: { $search: req.body.text } });
  res.send(movies);
};
const updateMovie = async (req, res) => {
  const movies = await Movies.updateOne(
    { _id: req.params.id },
    {
      title: req.body.title,
      actors: req.body.actors,
      genres: req.body.genres,
      plot: req.body.plot,
      year: req.body.year,
      director: req.body.director,
      runtime: req.body.runtime,
      videoUrl: req.body.videoUrl,
      posterUrl: req.body.posterUrl,
    }
  );
  res.send(movies);
};

module.exports = {
  getallmovies,
  getallmoviestest,
  getalltests,
  postMovies,
  deleteMovie,
  updateMovie,
  getmoviebyid,
  searchMovie,
};
