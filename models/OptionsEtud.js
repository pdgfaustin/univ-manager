const DataTypes = require("sequelize");
const db = require("../config/db");

const OptionsEtud = db.define("OptionsEtud",{
    codeOpt:{
        type:DataTypes.STRING(10),
        primaryKey:true
    },
    libeOpt:{
        type:DataTypes.STRING(100)
    },
    codeSect:{
        type:DataTypes.STRING(10)
    }
});
module.exports = OptionsEtud;