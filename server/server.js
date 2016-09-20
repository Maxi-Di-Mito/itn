/**
 * Created by MaxYCele on 29/4/2016.
 */
import express from "express";
const app = express();
import router from "./router";
import compression from "compression";
import cacheHandler from "./Cachehandler";

app.use(cacheHandler);
app.use(compression());
app.use(router);

var port = process.env.PORT || 8080;

app.listen(port,()=>{
    console.log("Listening on port "+port);
});