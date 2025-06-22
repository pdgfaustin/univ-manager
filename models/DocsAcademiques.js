const DataTypes = require("sequelize");
const db = require("../config/db");
 
const DocsAcademiques = db.define("DocsAcademiques",{
    idDoc:{
        type:DataTypes.STRING(10),
        primaryKey:true
    },
    libeDoc:{
        type:DataTypes.STRING(80)
    }
});
module.exports = DocsAcademiques;