const express = require("express")
const router = express.Router();
const {loginController,registerController,authController} = require("../Controllers/user-controllers")
const authmiddleware = require("../Middleware/authmiddleware.js")

router.post("/login", loginController);

// register
router.post("/register", registerController);

router.post("/getUserData",authmiddleware, authController);

module.exports = router;    