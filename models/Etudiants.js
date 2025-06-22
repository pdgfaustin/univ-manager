const DataTypes = require("sequelize");
const db = require("../config/db");


const Etudiants = db.define("Etudiants",{
    idEt:{
        type:DataTypes.INTEGER,
        autoInrement:true,
        
    },
    matrEtud:{
        type:DataTypes.STRING(10),
        primaryKey:true
    },
    nomEtud:{
        type:DataTypes.STRING(20),
        allowNull:false
    },
    postNomEtud:{
        type:DataTypes.STRING(20)
    },
    prenomEtud:{
        type:DataTypes.STRING(20)
    },
    sexeEtud:{
        type:DataTypes.STRING(10),
        allowNull:false
    },
    dateNaissEtud:{
        type:DataTypes.DATE,
        allowNull:false
    },
    emailEt:{
        type:DataTypes.STRING(80),
        unique:true,
        allowNull:true
    },
    adressEtud:{
        type:DataTypes.TEXT
    }
});
module.exports = Etudiants;