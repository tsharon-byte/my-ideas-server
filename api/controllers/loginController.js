const User = require("../models/user");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const errorMessage = "Auth error";
const SECRET_KEY = "secret";
const loginController = (req, res, next) => {
  const { login, password } = req.body;
  User.findOne({ login })
    .exec()
    .then((doc) => {
      if (!doc) {
        return res.status(500).json({
          error: errorMessage,
        });
      }
      bcrypt.compare(password, doc.password, (error, result) => {
        if (error || !result) {
          return res.status(500).json({
            error: errorMessage,
          });
        }
        const { _id: id } = doc;
        const jwt = jsonwebtoken.sign({ login, id }, SECRET_KEY);
        return res.status(200).json({
          message: "Login successful",
          jwt,
        });
      });
    })
    .catch((error) => {
      return res.status(500).json({
        error: errorMessage,
      });
    });
};
module.exports = loginController;
