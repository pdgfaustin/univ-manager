const DataTypes = require("sequelize");
const db = require("../config/db");

const EC = db.define("EC",{
    codeEC:{
        type:DataTypes.STRING(10),
        primaryKey:true
    },
    libeEC:{
        type:DataTypes.STRING(100)
    },
    maxEC:{
        type:DataTypes.DOUBLE
    },
    creditEC:{
        type:DataTypes.INTEGER
    },
    codeUE:{
        type:DataTypes.STRING(10)
    }
});
module.exports = EC;