const express = require("express");
const router = express.Router();
const auth_controller = require("../controller/auth_controller")

router.route("/register").post(auth_controller.postRegister);

router.route("/login").post(auth_controller.postLogin);

module.exports=router;  