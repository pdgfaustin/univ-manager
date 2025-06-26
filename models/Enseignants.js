const DataTypes = require("sequelize");
const db = require("../config/db");

const Enseignants = db.define("Enseignants",{
    matrEns:{
        type:DataTypes.STRING(10),
        primaryKey:true
    },
    nomEns:{
        type:DataTypes.STRING(20),
        allowNull:false
    },
    postNomEns:{
        type:DataTypes.STRING(20)
    },
    prenomsEns:{
        type:DataTypes.STRING(20)
    },
    sexeEns:{
        type:DataTypes.STRING(10)
    },
    dateNaissEns:{
        type:DataTypes.DATE
    },
    emailEns:{
        type:DataTypes.STRING(80),
        unique:true
    }
});
module.exports = Enseignants;