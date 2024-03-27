"use strict"
const userService = require("./userService");
const responseCreator = require("../middleware/response-handler-middleware");
module.exports = {
    userLogin: userLogin,
    userRegistration: userRegistration
}

async function userLogin(req, res) {
    try {
        let loggedInUser = await userService.usreLogin(req.body);
        responseCreator.createResponse(req, res,'', loggedInUser)
    } catch (err) {
        responseCreator.createResponse(req, res, 500, { message: "something wrong." })
    }
}

async function userRegistration(req, res) {
    try {
        let user = await userService.userRegistration(req.body);
        return responseCreator.createResponse(req, res,'', user)
    } catch (err) {
       return responseCreator.createResponse(req, res, 500, { message: "something wrong." })
    }
}
