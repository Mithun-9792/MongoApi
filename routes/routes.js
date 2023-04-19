const express = require("express");
const router = express.Router();

const {
  getallmovies,
  getallmoviestest,
  getalltests,
  postMovies,
  deleteMovie,
  updateMovie,
  getmoviebyid,
  searchMovie,
} = require("../controllers/controllers");

router.route("/").get(getallmovies);
router.route("/").post(postMovies);
router.route("/:id").delete(deleteMovie);
router.route("/:id").patch(updateMovie);
router.route("/:id").get(getmoviebyid);
router.route("/test").get(getallmoviestest);
router.route("/testall").get(getalltests);
router.route("/search").post(searchMovie);

module.exports = router;
