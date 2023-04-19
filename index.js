require("dotenv").config();
const express = require("express");
const connectDB = require("./db/db");
const cors = require("cors");
const app = express();


app.use(cors());
app.use(express.json());
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 5000;

const movies_routes = require("./routes/routes");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hi, I am Live!");
});

// middleware

app.use("/movies", movies_routes);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, () => {
      console.log(`I am listening on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
