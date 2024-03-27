const nconf = require("nconf");

const currentEnv = process.env.NODE_ENV || "development";
nconf.argv()
    .env()
    .file({ file: "./config/" + currentEnv + ".json" });

module.exports = nconf;
