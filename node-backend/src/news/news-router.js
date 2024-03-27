"use strict"
const express = require("express");
const router= express.Router();
const controller = require("./news-controller");
const cacheMiddleWare = require("../middleware/cache-middleware")
router.post("/",cacheMiddleWare.getCache,controller.getNews);
module.exports = router