const DataTypes = require("sequelize");
const db = require("../config/db");

const FraisAcademiques = db.define("FraisAcademiques",{
    idFrais:{
        type:DataTypes.STRING(10),
        primaryKey:true
    },
    libeFrais:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    montFrais:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    monnaieFrais:{
        type:DataTypes.STRING(5),
        allowNull:false
    },
    anneeAcad:{
        type:DataTypes.STRING(9),
        allowNull:false
    }
});
module.exports = FraisAcademiques;