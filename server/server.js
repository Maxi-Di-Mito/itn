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

const option = {
    host: 'www.random.org'
};

const keepAlive = () =>{
    setTimeout(keepAlive, 20 * 60 * 1000);
    console.log("pìngueando");
    http.request(option,()=>{
        console.log("Pingueado")
    });
};



var port = process.env.PORT || 8080;

app.listen(port,()=>{
    console.log("Listening on port "+port);
    keepAlive();
});