const express = require("express");

const router = express.Router();

const { register, getUser } = require("../controllers/auth");

router.post("/register", register);
router.get("/users", getUser);

module.exports = router;
