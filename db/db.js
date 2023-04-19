const mongoose = require("mongoose");

// uri =
//   "mongodb+srv://jtpl:jamtech@movieshunterz.znzoygn.mongodb.net/MoviesHunterz?retryWrites=true&w=majority";

const connectDB = (uri) => {
    // console.log("Hi I am connected");
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB
