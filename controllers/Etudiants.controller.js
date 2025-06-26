const { Etudiants } = require("../models");
const createError = require("../middlewares/error");

exports.createEtudiants = async(req, res, next) => {
    try {
        const etudiants = await Etudiants.create(req.body);
        res.status(201).json(etudiants);
    } catch (error) {
        next(createError(500,"Erreur lors de la création de l'Etudiants", error.message))
    }
}
exports.findAllEtudiants = async(req, res, next)=>{
    try {
        const etudiants = await Etudiants.findAll();
        res.status(200).json(etudiants);
    } catch (error) {
        next(createError(500,error.message))
    }
}
exports.findEtudiant = async(req, res, next) => {
    try {
        const etudiants = await Etudiants.findByPk(req.params.id);
        res.status(200).json(etudiants);
    } catch (error) {
        next(createError(500,error.message))
    }
}
exports.updateEtudiant = async (req, res, next) => {
    try {
        const [etud] = await Etudiants.update(req.body,{
            where : {idEt : req.params.id}
        });
        if(etud === 0) return next(createError(404,"Etudiant à modifier inexistant"));
        
        const etudiants  = await Etudiants.findOne({ where : {idEt : req.params.id}});
        res.status(200).json(etudiants);
    } catch (error) {
        next(createError(500,error.message));
    }
}
exports.deleteEtudiant = async(req, res, next)=>{
    try {
        const del = Etudiants.destroy({where : {idEt:req.params.id}});
        if(del === 0) return next(createError(404,"Etudiant à supprimer inexistant"));

        res.status(200).json({message : "Suppression effectuée"})
    } catch (error) {
        next(createError(500,error.message))
    }
}