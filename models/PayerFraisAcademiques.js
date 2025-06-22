const DataTypes = require("sequelize");
const db = require("../config/db");

const PayerFraisAcademiques = db.define("PayerFraisAcademiques",{
    idPaie:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    matrEtud:{
        type:DataTypes.STRING(10)
    },
    idFrais:{
        type:DataTypes.STRING(10)
    },
    codePro:{
        type:DataTypes.STRING(10)
    },
    anneeAcad:{
        type:DataTypes.STRING(9)
    },
    montPayer:{
        type:DataTypes.INTEGER
    },
    datePayer:{
        type:DataTypes.DATE
    }
});
module.exports = PayerFraisAcademiques;