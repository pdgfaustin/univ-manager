const DataTypes = require("sequelize");
const db = require("../config/db");

const PromotionsEtudiant = db.define("PromotionsEtudiant",{
    codePro:{
        type:DataTypes.STRING(10),
        primaryKey:true
    },
    libePromo:{
        type:DataTypes.STRING(80)
    },
    codeOpt:{
        type:DataTypes.STRING(10)
    }
});
module.exports = PromotionsEtudiant;