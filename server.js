const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");
const path = require("path"); //added

const PORT = 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//If deployed, use the deployed database.  Otherwise use the local mongoBudget database.
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/budget"

//Connect to the Mongo DB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
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