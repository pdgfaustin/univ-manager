const DataTypes = require("sequelize");
const db = require("../config/db");

const AvoirGrade = db.define("AvoirGrade",{
    idAvoir:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    matrEns:{
        type:DataTypes.STRING(10)
    },
    codeGrade:{
        type:DataTypes.STRING(10)
    },
    dateDebut:{
        type:DataTypes.DATE
    },
    dateFin:{
        type:DataTypes.DATE
    }
});
module.exports = AvoirGrade;