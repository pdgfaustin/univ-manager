const {ProgrammerCours} = require("../models");
const createError = require("../middlewares/error");


exports.createProgramme = async(req, res, next) => {
    try {
        const pgc = await ProgrammerCours.create(req.body);
        let donne = {
            code:201,
            message:"Cours programmé",
            data:pgc
        };
        res.status(201).json(donne);
    } catch (error) {
        next(createError(500, error.message));
    }
}
exports.findAllProgramme = async(req, res, next)=>{
    try {
        const pgc = await ProgrammerCours.findAll();
        let donne = {
            code:200,
            message:"Liste des cours programmées",
            data:pgc
        };
        res.status(200).json(donne);
    } catch (error) {
        next(createError(500,error.message));
    }
}
exports.findPGC = async(req, res, next) =>{
    try {
        const pgc = await ProgrammerCours.findByPk(req.params.id);
        let donne = {
            code:200,
            message:"Le programme demandé",
            data:pgc
        };
        res.status(200).json(donne);
    } catch (error) {
        next(createError(500,error.message))
    }
}