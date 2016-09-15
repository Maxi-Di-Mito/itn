/**
 * Created by maximiliano.dimito on 5/9/2016.
 */
/*
var fs = require('fs');
var path = require("path");
var Sequelize = require("sequelize");
var env = "development";
var config = require(path.join(__dirname,"config", "sequelize_config.json"))[env];
var sequelizeModels = [];

console.log("ORM@ " + JSON.stringify(config));

var sequelize = new Sequelize(config.database, config.username, config.password, config);

var models = fs.readdirSync(__dirname + '/models/').map(function(file){
    return file.split(".")[0];
});


models.forEach(function(model) {
    sequelizeModels[model] = sequelize.import(__dirname + '/models/' + model);
});


require('./model_associations')(sequelizeModels);

module.exports.sequelize = sequelize;
module.exports.models = sequelizeModels;*/