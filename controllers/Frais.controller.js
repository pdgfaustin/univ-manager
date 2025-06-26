const { FraisAcademiques } = require("../models");
const createError = require("../middlewares/error");

exports.createFrais = async(req, res, next) =>{
    try {
        const frais = await FraisAcademiques.create(req.body);
        res.status(201).json(frais);
    } catch (error) {
        next(createError(500,"Erreur dûe à la création du frais", error.message));
    }
}
exports.findAllFrais = async(req, res, next) => {
    try {
        const frais = await FraisAcademiques.findAll();
        res.status(200).json(frais);
    } catch (error) {
        next(createError(500, error.message));
    }
}
exports.findFrais = async(req, res, next) =>{
    try {
        const frais = await FraisAcademiques.findByPk(req.params.id);
        res.status(200).json(frais);
    } catch (error) {
        next(createError(500,error.message))
    }
}
exports.updateFrais = async(req, res, next) =>{
    try {
        const [frai] = await FraisAcademiques.update(req.body,{
            where : {idFrais : req.params.id}
        });
        if(frai === 0) return next(createError(404, "Le frais à modifier est inexistant"));

        const frais = await FraisAcademiques.findOne({ where : {idFrais : req.params.id}});
        res.status(200).json(frais);
    } catch (error) {
        next(createError(500,error.message));
    }
}
exports.deleteFrais = async(req, res, next) => {
    try {
        const frais  =  await FraisAcademiques.destroy({where : {idFrais : req.params.id}});
        if(frais === 0) return next(createError(404, "Frais à supprimer inexistant"))
        res.status(200).json({
            message : "Suppression effectuée"
        });
    } catch (error) {
        next(createError(500,error.message))
    }
}