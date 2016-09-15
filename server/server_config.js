var path = require("path");

/* Server configuration */
var ROOT_DIR = path.resolve(__dirname, "../");

var server_config = {
    PORT:  9001,
    PUBLIC_STATIC_CONTENT_DIR: ROOT_DIR + "/public",
    ROOT_DIR: ROOT_DIR

}

module.exports = server_config;