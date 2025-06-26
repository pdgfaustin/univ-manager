const {Enseignants} = require("../models/index");
const createError = require("../middlewares/error");

exports.createEnseignant = async(req, res, next)=>{
    try {
        const ens = await Enseignants.create(req.body);
        console.log(req.body);
        
        res.status(203).json(ens);
    } catch (error) {
        next(createError(500,"Erreur lors de la création de l'Enseignant ", error.message))
    }
}
exports.findAllEnseignants = async(req,res,next)=>{
    try {
        const ens = await Enseignants.findAll();
        res.status(200).json(ens);
    } catch (error) {
        next(createError(500,"Erreur lors de la création de l'Enseignant ", error.message));
    }
}
exports.findEnseignants = async(req,res,next)=>{
    try {
        const ens = await Enseignants.findByPk(req.params.id);
        res.status(200).json(ens);
    } catch (error) {
        next(createError(500,"Erreur lors de la création de l'Enseignant ", error.message));
    }
}
exports.updateEnseignants = async (req,res,next) => {
    try {

        const [updateRows] = await Enseignants.update(req.body,{
            where : {matrEns : req.params.id}
        });

        if(updateRows === 0) return next(createError(404,"L'enseignant à modifier n'existe pas"));

        const ense = await Enseignants.findOne({ where : {matrEns : req.params.id}});

        res.status(200).json(ense);
    } catch (error) {
        next(createError(500,"Erreur lors de la création de l'Enseignant ", error.message));
    }
}
exports.deleteEnseignants = async (req,res,next) => {
    try {

        const del = await Enseignants.destroy({where : {matrEns : req.params.id}});

        if(del === 0) return next(createError(404,"L'enseignant à modifier n'existe pas"));

        res.status(200).json({message:"Suppression effectuée"});
    } catch (error) {
        next(createError(500,"Erreur lors de la création de l'Enseignant ", error.message));
    }
}