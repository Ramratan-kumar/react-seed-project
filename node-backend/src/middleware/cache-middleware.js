const NodeCache = require("node-cache");
const myCache = new NodeCache({ stdTTL: 100, checkperiod: 120 });
var crypto = require('crypto');
module.exports = {
    setCache: setCache,
    getCache: getCache
}

async function setCache(resObj,reqObj) {
    cacheKey = await createKey(reqObj);
    success = myCache.set( cacheKey, resObj, 10000 );
}

async function getCache(req, res, next) {
    cacheKey = await createKey(req.body);
    let object = myCache.get(cacheKey);
    if (object) {
        return res.status(200).json(object)
    } else {
        next();
    }
}

async function createKey(reqObj) {
    var hash = await crypto.createHash('sha1');
    data = hash.update(JSON.stringify(reqObj), 'utf-8');
    cacheKey = data.digest('hex');
    return cacheKey
}