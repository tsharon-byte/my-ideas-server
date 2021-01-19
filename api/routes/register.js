const express = require("express");
const router = express.Router();
const registerController = require("../controllers/registerController");
const controllerError = require("../controllers/controllerError");
router.post("/", registerController);
router.get("/", controllerError);
module.exports = router;
