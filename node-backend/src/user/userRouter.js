"use strict"
const express = require("express");
const router = express.Router();
const controller = require("./userController");
const cacheMiddleWare = require("../middleware/cache-middleware")
router.post("/login", cacheMiddleWare.getCache, controller.userLogin);
router.post("/registration", controller.userRegistration);
module.exports = router