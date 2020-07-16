const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//If deployed, use the deployed database.  Otherwise use the local mongoBudget database.

//Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://user10:password0@ds111549.mlab.com:11549/heroku_15gjsngz",
  {
    useNewUrlParser: true,
    useFindAndModify: false
  });

//Mongoose connection used before deployment
//mongoose.connect("mongodb://localhost/budget",
// {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
