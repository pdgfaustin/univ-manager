const {Evaluations} = require("../models");
const createError = require("../middlewares/error");
const { json } = require("sequelize");



exports.createEvaluation = async(req, res, next) =>{
    try {
        const eva = await Evaluations.create(req.body);
        let donne = {
            code:201,
            message:"Evaluation effectuée",
            data:eva
        };
        res.status(201).json(donne)
    } catch (error) {
        next(createError(500,error.message))
    }
}
exports.findAllEvaluations = async(req, res, next) =>{
    try {
        const eva = await Evaluations.findAll();
        let donne = {
            code:200,
            message:"Liste des Evaluations",
            data:eva
        };
        res.status(200).json(donne);
    } catch (error) {
        next(createError(500, error.message))
    }
}
exports.findEvaluations = async(req, res, next) =>{
    try {
        const eva = await Evaluations.findByPk(req.params.id);
        let donnee = {
            code:200,
            message:"L'évalutaion cherchée",
            data:eva
        };
        res.status(200).json(donnee);
    } catch (error) {
        next(createError(500,error.message));
    }
}