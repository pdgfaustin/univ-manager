const DataTypes = require("sequelize");
const db = require("../config/db");

const SessionsEtudes = db.define("SessionsEtudes",{
    codeSess:{
        type:DataTypes.STRING(10),
        primaryKey:true
    },
    libeSession:{
        type:DataTypes.STRING(100)
    },
    codePro:{
        type:DataTypes.STRING(10)
    }
});
module.exports = SessionsEtudes;