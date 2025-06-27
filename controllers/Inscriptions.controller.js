const {Inscriptions} = require("../models");
const createError = require("../middlewares/error");


exports.createInscription = async(req, res, next) =>{
    try {
        const insc = await Inscriptions.create(req.body);
        let donne = {
            code:201,
            message:"Inscription créer pour cette année académique",
            data:insc
        };
        res.status(201).json(donne);
    } catch (error) {
        next(createError(500,error.message))
    }
}
exports.findAllInscription = async(req, res, next) =>{
    try {
        const insc = await Inscriptions.findAll();
        let donne = {
            code:200,
            message:"Liste des Inscriptions",
            data:insc
        };
        res.status(200).json(donne)
    } catch (error) {
        next(createError(500,error.message));
    }
}
exports.findInscription = async(req, res, next) =>{
    try {
        const insc = await Inscriptions.findByPk(req.params.id);
        let donne = {
            code:200,
            message:"L'Inscription recherchée",
            data:insc
        };
        res.status(200).json(donne);
    } catch (error) {
        next(createError(500,error.message));
    }
}