const DataTypes = require("sequelize");
const db = require("../config/db");

const Inscriptions = db.define("Inscriptions",{
    idInscr:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    matrEtud:{
        type:DataTypes.STRING(10)
    },
    codeOpt:{
        type:DataTypes.STRING(10)
    },
    anneeAcad:{
        type:DataTypes.STRING(10)
    },
    codePro:{
        type:DataTypes.STRING(10)
    }
});
module.exports=Inscriptions;