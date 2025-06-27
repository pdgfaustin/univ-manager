const {CommanderDocs} = require("../models");
const createError = require("../middlewares/error");


exports.createCommande = async(req, res, next) =>{
    try {
        const commande = await CommanderDocs.create(req.body);
        let donnee = {
            code:201,
            message:"Commande du document effectuée",
            data:commande
        }
        res.status(201).json(donnee);
    } catch (error) {
        next(createError(500,error.message))
    }
}
exports.findAllCommande = async(req, res, next) =>{
    try {
        const commande = await CommanderDocs.findAll();
        let donnee = {
            code:200,
            message:"Liste des Commandes",
            data:commande
        }
        res.status(200).json(donnee);
    } catch (error) {
        next(createError(500,error.message))
    }
}
exports.findCommande = async(req, res, next) =>{
    try {
        const commande = await CommanderDocs.findByPk(req.params.id);
        let donne = {
            code:200,
            message:"Commande cherchée",
            data:commande
        }
        res.status(200).json(donne)
    } catch (error) {
        next(createError(500,error.message))
    }
}