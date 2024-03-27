"use strict"
const newService = require("./news-service");
const responseCreator = require("../middleware/response-handler-middleware");
module.exports = {
    getNews:getNews
}

async function getNews(req,res){
    try{
        let news = await newService.getNews(req.body);
        responseCreator.createResponse(req,res,200,news)
    }catch(err){
        responseCreator.createResponse(req,res,500,{message:"some thing wrong."})
    }
}

