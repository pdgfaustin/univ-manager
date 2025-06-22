const DataTypes = require("sequelize");
const db = require("../config/db");

const Evaluations = db.define("Evaluations",{
    idEva:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    matrEtud:{
        type:DataTypes.STRING(10)
    },
    matrEns:{
        type:DataTypes.STRING(10)
    },
    codeSess:{
        type:DataTypes.STRING(10)
    },
    anneeAcad:{
        type:DataTypes.STRING(9)
    },
    codeEC:{
        type:DataTypes.STRING(10)
    },
    nodeObt:{
        type:DataTypes.INTEGER
    },
    datEva : {
        type:DataTypes.DATE
    }
});
module.exports = Evaluations;