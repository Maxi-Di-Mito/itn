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

const options = {
    host: 'https://www.itn-web.herokuapp.com'
};

const keepAlive = () =>{
    setTimeout(keepAlive, 20 * 60 * 1000);
    console.log("pìngueando");

    http.get('http://www.itn-web.herokuapp.com', function(resp){
        resp.on('data', function(chunk){
            //do something with chunk
        });
    }).on("error", function(e){
        console.log("Got error: " + e.message);
    });
};



var port = process.env.PORT || 8080;

app.listen(port,()=>{
    console.log("Listening on port "+port);
    keepAlive();
});