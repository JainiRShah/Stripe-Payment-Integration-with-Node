const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.home);
router.post("/payment", userController.payment);

module.exports = router;
