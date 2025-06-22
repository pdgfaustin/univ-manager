const DataTypes = require("sequelize");
const db = require("../config/db");

const SectionsEtudiants = db.define("SectionsEtudiants",{
    codeSect:{
        type:DataTypes.STRING(10),
        primaryKey:true
    },
    libeSect:{
        type:DataTypes.STRING(100)
    }
});
module.exports = SectionsEtudiants;