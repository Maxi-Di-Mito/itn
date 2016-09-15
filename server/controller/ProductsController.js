/**
 * Created by maximiliano.dimito on 9/15/2016.
 */
import DBService from '../database/DBService';



class ProductController{

    static getAllProducts(req,res){
        DBService.getProducts().then( (prods) => {
            res.json(prods);
        });
    }

    static insertProduct(req,res){
        const prod = req.body.prod;
        DBService.addProduct(prod).then( (insertedProd)=>{
            if(!insertedProd)
                res.json({response:false});
            res.json({response:true});
        });
    }
}





export default ProductController;