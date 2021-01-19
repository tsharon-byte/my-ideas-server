const express = require("express");
const register = require("./api/routes/register");
const login = require("./api/routes/login");
const app = express();
app.use("/register", register);
app.use("/login", login);
module.exports = app;
