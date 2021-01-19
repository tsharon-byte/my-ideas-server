const controllerError = (req, res, next) => {
  return res.status(404).json({
    message: "use POST instead of GET",
  });
};
module.exports = controllerError;
