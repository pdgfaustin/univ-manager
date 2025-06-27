const DataTypes = require("sequelize");
const db = require("../config/db");

const CommanderDoc = db.define("CommanderDoc",{
    idCD:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    matrEtud:{
        type:DataTypes.STRING(10),

    },
    idDoc:{
        type:DataTypes.STRING(10)
    },
    codeOpt:{
        type:DataTypes.STRING(10)
    },
    anneeAcad:{
        type:DataTypes.STRING(9)
    },
    dateCmd:{
        type:DataTypes.DATE
    },
    etatCmd:{
        type:DataTypes.STRING(40),
        default:"En cours ..."
    }
});
module.exports=CommanderDoc;