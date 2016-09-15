/**
 * Created by MaxYCele on 29/4/2016.
 */
import express from "express";
import serverConfig from "./server_config";
import bodyParser from "body-parser";
const router = express.Router();


var logger = require('./LoggerMiddleware');
import ProductController from './controller/ProductsController';

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(logger);
router.use(express.static(serverConfig.PUBLIC_STATIC_CONTENT_DIR));

router.get('/',(request,response) => {
    response.sendFile("index.html", {root: serverConfig.PUBLIC_STATIC_CONTENT_DIR});
});

router.get('/catalog', ProductController.getAllProducts);
router.post('/catalog/insert', ProductController.insertProduct);

router.post('/sendMail',(request,response)=>{

    response.json(
        {
            status:"OK",
            message: "Su mensaje fue enviado."
        });
});


module.exports = router;