const DataTypes = require("sequelize");
const db = require("../config/db");

const ProgrammerCours = db.define("ProgrammerCours",{
    idPgm:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    codePro:{
        type:DataTypes.STRING(10)
    },
    codeEC:{
        type:DataTypes.STRING(10)
    },
    matrEns:{
        type:DataTypes.STRING(10)
    },
    anneeAcad:{
        type:DataTypes.STRING(9)
    },
    dateDebProgrammation:{
        type:DataTypes.DATE
    },
    dateFinProgrammation:{
        type:DataTypes.DATE
    }
});
module.exports = ProgrammerCours;