/**
 * Created by maximiliano.dimito on 9/14/2016.
 */
import Datastore from "nedb";
import BluePromise from 'bluebird'

BluePromise.promisifyAll(Datastore.prototype);

const productos = new Datastore({ filename: './server/database/productos.db', autoload: true });

const dummyProd = {
    "marca": "Mercedes Benz",
    "categorias":
    [
        {
            "nombre": "Horquillas de embrague y soportes de motor",
            "productos":
            [
                {
                    "cod": 96,
                    "detalle":"Horquilla de Embrague Original MB 180",
                    "imagen": "imagen/96.jpg"
                },
                {
                    "cod": 97,
                    "detalle":"Horquilla de Embrague Original 1215-1315",
                    "imagen": "imagen/97.jpg"
                }
            ]
        },
        {
            "nombre": "Reformas en Acero",
            "productos":
            [
                {
                    "cod": 101,
                    "detalle":"Horquilla de Embrague Reforma 1517-15180",
                    "imagen": "imagen/101.jpg"
                },
                {
                    "cod": 102,
                    "detalle":"Horquilla de Embrague Ref.1517-1518 Larga",
                    "imagen": "imagen/102.jpg"
                }

            ]
        }
    ]
};


/*productos.insert(dummyProd, (err, inserted ) =>{

});*/

class DBService {

    static async addProduct(p){
        try {
            return await productos.insertAsync(p);
        }catch(err){
            return undefined;
        }
    }

    static async getProducts(){
        try{
            return await productos.findAsync({});
        }catch(err){
            console.log(err+"\nROMPIO");
            return undefined;
        }
    }


    static async modifyProduct(prod){
        try{
            return await productos.updateAsync(prod);
        }catch(err){
            return undefined;
        }
    }

}

export default DBService;