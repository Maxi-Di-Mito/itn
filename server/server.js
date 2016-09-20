/**
 * Created by MaxYCele on 29/4/2016.
 */
var express = require("express");
const http = require('http');
var app = express();
var serverConfig = require("./server_config");
var router = require("./router");
require("babel-polyfill");

app.use(router);


var port = process.env.PORT || 8080;

app.listen(port,()=>{
    console.log("Listening on port "+port);
});