const express = require("express")
const router = express.Router();
const {loginController,registerController} = require("../Controllers/user-controllers")
const authmiddleware = require("../Middleware/authmiddleware")

router.post("/login", loginController);

// register
router.post("/register", registerController);

module.exports = router;    