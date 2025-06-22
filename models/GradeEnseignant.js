const DataTypes = require("sequelize");
const db = require("../config/db");

const GradeEnseignant = db.define("GradeEnseignant",{
    codeGrade:{
        type:DataTypes.STRING(10),
        primaryKey:true
    },
    libeGrade:{
        type:DataTypes.STRING(100)
    }
});
module.exports = GradeEnseignant