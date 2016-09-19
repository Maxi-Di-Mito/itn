/**
 * Created by MaxYCele on 29/4/2016.
 */
var express = require("express");
var app = express();
var serverConfig = require("./server_config");
var router = require("./router");
require("babel-polyfill");

app.use(router);

const keepAlive = () =>{
    setTimeout(keepAlive, 5000);
    console.log("keepAliveando");
};



var port = process.env.PORT || 8080;

app.listen(port,()=>{
    console.log("Listening on port "+port);
    keepAlive();
});