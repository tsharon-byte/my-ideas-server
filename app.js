const express = require("express");
const register = require("./api/routes/register");
const login = require("./api/routes/login");
const app = express();
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
