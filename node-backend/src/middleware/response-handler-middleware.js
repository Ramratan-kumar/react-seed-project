
const cacheMiddleWare = require("./cache-middleware")
module.exports = {
    createResponse : createResponse
}

function createResponse(req,res,statuscode,resObject){
    
    return res.status(statuscode||resObject.code).json(resObject);
}