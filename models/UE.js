const DataTypes = require("sequelize");
const db = require("../config/db");

const UE = db.define("UE",{
    codeUE:{
        type:DataTypes.STRING(10),
        primaryKey:true
    },
    libeUE:{
        type:DataTypes.STRING(150)
    },
    maxUE:{
        type:DataTypes.DOUBLE
    },
    creditUE:{
        type:DataTypes.INTEGER
    },
    codeOpt:{
        type:DataTypes.STRING(10)
    },
    codeSess:{
        type:DataTypes.STRING(10)
    }
});
module.exports = UE;