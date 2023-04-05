const express = require("express");
const controller = require("../controller/Login");

const router = express.Router();

router.get("/", controller.main);

router.post("/", controller.login);

module.exports = router;
