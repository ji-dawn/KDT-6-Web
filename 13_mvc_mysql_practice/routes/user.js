// DONE: 라우트 설정
const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

// 기본 주소 : localhost:PORT/user
router.get("/", controller.index);

// GET /user/signup
router.get("/signup", controller.signup);

// GET /user/signin
router.get("/signin", controller.signin);

// POST /user/signup
router.post("/signup", controller.postSignUp);

// POST /user/signin
router.get("/signin", controller.postSignIn);

// POST /user/profile
router.post("/profile", controller.postProfile);

// POST /user/profile/delete
router.post("/profile/delete", controller.postProfileDelete);

// POST /user/profile/edit
router.post("/profile/edit", controller.postProfileEdit);

module.exports = router;
