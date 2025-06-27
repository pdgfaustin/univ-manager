const {CommanderDocs, EC} = require("../models");
const createError = require("../middlewares/error");


exports.createEC = async(req, res, next) =>{
    try {
        const ec = await EC.create(req.body);
        let donne = {
            code:201,
            message:"EC créé avec succès",
            data:ec
        }
        res.status(201).json(donne);
    } catch (error) {
        next(createError(500,error.message))
    }
}
exports.findAllEC = async(req, res, next)=>{
    try {
        const ec = await EC.findAll();
        let donne = {
            code:200,
            message:"Liste des EC",
            data:ec
        }
        res.status(200).json(donne);

    } catch (error) {
        next(createError(500,error.message))
    }
}
exports.findEC = async(req, res, next)=>{
    try {
        const ec = await EC.findByPk(req.params.id);
        let donne = {
            code:200,
            message:"EC cherché",
            data:ec
        }
        res.status(200).json(donne);
    } catch (error) {
        next(createError(500,error.message))
    }
}
exports.updateEC = async(req, res, next) =>{
    try {
        const [ecU] = await EC.update(req.body,
            {
                where : {codeEC : req.params.id}
            }
        );
        if(ecU === 0) return next(createError(404, "EC inexistant"));

        const ec = await EC.findOne({where : {codeEC : req.params.id}});
        let donne = {
            code:200,
            message:"EC modifié",
            data:ec
        }
        res.status(200).json(donne)
    } catch (error) {
        next(createError(500,error.message))
    }
}
exports.deleteEC = async(req, res, next) => {
    try {
        const del = await EC.destroy({where : {codeEC : req.params.id}});
        if(del === 0) return next(createError(404, "EC à supprimer inexistant"));
        let donne = {
            code:200,
            message:"EC supprimé avec succès"
        }
        res.status(200).json(donne);
    } catch (error) {
        next(createError(500, error.message))
    }
}