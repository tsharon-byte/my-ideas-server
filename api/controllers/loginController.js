const loginController = (req, res, next) => {
  return res.status(200).json({
    message: "login",
  });
};
module.exports = loginController;
