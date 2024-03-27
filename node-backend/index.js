"use strict"
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const express = require("express");
const bodyParser = require('body-parser');
const corss = require("corss");
const app = express();
app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(corss());
app.use(express.static('public'));
app.use("/news",require("./src/news/news-router"))
app.use("/user",require("./src/user/userRouter"))
app.listen(8080,function(err,success){
    if(!err){
        console.log("server litning on 8080")
    }
})