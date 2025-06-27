const {AvoirGrade} = require("../models");
const createError = require("../middlewares/error");


exports.createAvoirGrade = async(req, res, next) => {
    try {
        const avoir = await AvoirGrade.create(req.body);
        let donne = {
            code:201,
            message:"Grade associé à l'agent",
            data:avoir
        }
        res.status(201).json(donne);
    } catch (error) {
        next(createError(500,error.message))
    }
}
exports.findAllAvoir = async(req, res, next) => {
    try {
        const avoir = await AvoirGrade.findAll();
        let donne = {
            code:200,
            message:"Liste des Associations",
            data:avoir
        }
        res.status(200).json(donne);
    } catch (error) {
        next(createError(500,error.message))
    }
}
exports.findAvoir = async(req, res, next) =>{
    try {
        const avoir = await AvoirGrade.findByPk(req.params.id);
        let donne = {
            code : 200,
            message : "Donnée de grade cherchée",
            data:avoir
        }
        res.status(200).json(donne);
    } catch (error) {
        next(createError(500,error.message))
    }
}