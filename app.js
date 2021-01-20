const express = require("express");
const register = require("./api/routes/register");
const login = require("./api/routes/login");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const MONGO_ATLAS_PWD = "ZNYPlWYGhWcxIuYm";
const DB_NAME = "my_ideas";
const url =
  "mongodb+srv://deno_survey:" +
  MONGO_ATLAS_PWD +
  "@cluster0.vj1zo.mongodb.net/" +
  DB_NAME +
  "?retryWrites=true&w=majority";
// const url =
//   "mongodb+srv://deno_survey:" +
//   process.env.MONGO_ATLAS_PWD +
//   "@cluster0.mgtmw.mongodb.net/" +
//   process.env.DB_NAME +
//   "?retryWrites=true&w=majority";
console.log(url);
mongoose.connect(url);
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PATCH, DELETE, PUT, GET, POST");
    return res.status(200).json({});
  }
  next();
});
app.use("/register", register);
app.use("/login", login);
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    message: error.message,
  });
});
module.exports = app;
