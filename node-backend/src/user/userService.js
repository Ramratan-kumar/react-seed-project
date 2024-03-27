"use strinct"
const fs = require("fs");

module.exports = {
    userRegistration: userRegistration,
    usreLogin: userLogin
}


function userRegistration(reqBody) {
    try {

        let usersData = fs.readFileSync(__dirname + "../../mockData.json")
        var users = JSON.parse(usersData)
        if (!users[reqBody.email]) {
            users[reqBody.email] = reqBody
            fs.writeFileSync(__dirname + "../../mockData.json", JSON.stringify(users))
            return { message: "success",code:201,data:"" }
        } else {
            return { message: "User already registerd.",code:202,data:"" }
        }



    } catch (err) {
        throw err;
    }
}

function userLogin(reqBody) {
    try {
        let data = fs.readFileSync(__dirname + "../../mockData.json", "utf-8");
        let user = JSON.parse(data);
        if(user[reqBody.email] && user[reqBody.email].password == reqBody.password){
            delete user[reqBody.email].password;
            user[reqBody.email].token = "2dfkkjk"
            return {message:"success",code:200,data:user[reqBody.email]}
        }else{
            return {message:"User Unauthorized",code:401,data:""}
        }
       
    } catch (err) {
        throw err;
    }
}