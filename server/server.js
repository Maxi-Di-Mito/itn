/**
 * Created by MaxYCele on 29/4/2016.
 */
var express = require("express");
var app = express();
var serverConfig = require("./server_config");
var router = require("./router");
require("babel-polyfill");

app.use(router);

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port = process.env.PORT || 8080;

app.listen(port,ipaddress,()=>{
    console.log("Listening on port "+port);
});