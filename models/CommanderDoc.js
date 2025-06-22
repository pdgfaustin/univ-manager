const DataTypes = require("sequelize");
const db = require("../config/db");

const CommanderDoc = db.define("CommanderDocument",{
    idCD:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        prymaryKey:true
    },
    matrEtud:{
        type:DataTypes.STRING(10),

    },
    idDoc:{
        type:DataTypes.STRING(10)
    },
    codOpt:{
        type:DataTypes.STRING(10)
    },
    anneeAcad:{
        type:DataTypes.STRING(9)
    },
    dateCmd:{
        type:DataTypes.DATE
    },
    etatCmd:{
        type:DataTypes.STRING(40)
    }
});
module.exports=CommanderDoc;