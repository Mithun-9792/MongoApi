require("dotenv").config();
const connectDB = require("./db/db");
const model = require("./models/movie");
const movieJson = require("./movieDB.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    await model.deleteMany();
    await model.create(movieJson);
    console.log("created");
  } catch (error) {
    console.log(error);
  }
};

start();
