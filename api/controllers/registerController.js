const registerController = (req, res, next) => {
  return res.status(200).json({
    message: "register",
  });
};
module.exports = registerController;
