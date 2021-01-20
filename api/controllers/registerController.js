const User = require("../models/user");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const SECRET_KEY = "secret";
const registerController = (req, res, next) => {
  const { login, password } = req.body;
  User.findOne({ login })
    .exec()
    .then((doc) => {
      if (doc) {
        return res.status(500).json({
          message: "User already exists",
        });
      }
      bcrypt.hash(password, 10, (error, hash) => {
        if (error) {
          return res.status(500).json({
            message: "register failure",
          });
        }
        const user = new User({
          _id: mongoose.Types.ObjectId(),
          login,
          password: hash,
        });
        return user.save().then((doc) => {
          const { _id: id } = doc;
          const jwt = jsonwebtoken.sign({ login, id }, SECRET_KEY);
          return res.status(200).json({
            message: "register",
            jwt,
          });
        });
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: "register failure",
      });
    });
};
module.exports = registerController;
