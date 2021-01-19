const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");
const controllerError = require("../controllers/controllerError");
router.post("/", loginController);
router.get("/", controllerError);
module.exports = router;
