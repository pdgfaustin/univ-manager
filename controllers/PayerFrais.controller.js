const {PayerFraisAcademiques} = require("../models");
const createError = require("../middlewares/error");


exports.createPaiement = async(req, res, next) =>{
    try {
        const paFrais = await PayerFraisAcademiques.create(req.body);
        let donnee = {
            code:201,
            message:"Paiement effectué avec succès",
            data:paFrais
        };
        res.status(201).json(donnee);
    } catch (error) {
        next(createError(500,error.message))
    }
}
exports.findAllPay = async(req, res, next)=>{
    try {
        const paFrais = await PayerFraisAcademiques.findAll();
        let donne = {
            code:200,
            message:"Liste des Paiements",
            data:paFrais
        };
        res.status(200).json(donne);
    } catch (error) {
        next(createError(500,error.message))
    }
}
exports.findPay = async(req, res, next)=>{
    try {
        const paFrais = await PayerFraisAcademiques.findByPk(req.params.id);
        let donne = {
            code:200,
            message:"Le Paiement cherché",
            data:paFrais
        };
        res.status(200).json(donne);
    } catch (error) {
        next(createError(500,error.message))
    }
}