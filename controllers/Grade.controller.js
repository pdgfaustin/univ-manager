const {GradeEnseignant} = require("../models");
const createError = require("../middlewares/error");

exports.createGrade = async(req,res,next)=>{
    try {
        const grade = await GradeEnseignant.create({
            codeGrade:req.body.codeGrade.toUpperCase(),
            libeGrade:req.body.libeGrade.toUpperCase()
        });
        res.status(201).json(grade);
    } catch (error) {
        next(createError(500,"Erreur lors de la création de Grade ", error.message))
    }
}
exports.getAll = async(req,res,next)=>{
    try {
        const grade = await GradeEnseignant.findAll();
        res.status(200).json(grade);
    } catch (error) {
        next(createError(500,"Erreur lors de la création de Grade ", error.message))
    }
}
exports.getGrade = async(req,res,next)=>{
    try {
        //console.log(req.params.id);
        
        const grade = await GradeEnseignant.findByPk(req.params.id);
        console.log(grade);
        
        res.status(200).json(grade);
    } catch (error) {
        next(createError(500,"Erreur lors de la création de Grade ", error.message))
    }
}
exports.updateGrade = async(req,res,next)=>{
    try {
        
        
        const [updateRows] = await GradeEnseignant.update(req.body,{
            where: { codeGrade: req.params.id }
        });
        if(updateRows === 0) return next(createError(404,"Elément à modifier introuvable"));

        const grade = await GradeEnseignant.findOne({where: {codeGrade : req.params.id}});
        return res.status(203).json(grade);
    } catch (error) {
        next(createError(500,"Erreur lors de la modification de grade",error.message));
    }
}
exports.deteGrade = async(req,res,next)=>{
    try {
        const deleted = await GradeEnseignant.destroy({
            where : {codeGrade : req.params.id}
        });
        if(deleted === 0) return next(createError(404,"Elément à modifier introuvable"));

        res.status(200).json({message : "Article supprimé avec succès"});
    } catch (error) {
        next(createError(500,"Erreur lors de la Suppression de grade",error.message));
    }
}