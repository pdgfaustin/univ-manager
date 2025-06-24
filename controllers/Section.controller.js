const {SectionsEtudiants} = require("../models");
const createError = require("../middlewares/error");

exports.createSection = async(req,res,next)=>{
    try {
        const Section = await SectionsEtudiants.create({
            codeSect:req.body.codeSect.toUpperCase(),
            libeSect:req.body.libeSect.toUpperCase()
        });
        console.log(req.body.libeSect);
        res.status(201).json(Section);
    } catch (error) {
        next(createError(500,"Erreur lors de la création de la Section", error.message))
    }
}
exports.findAllSec = async(req,res,next)=>{
    try {
        const sec = await SectionsEtudiants.findAll();
        res.status(200).json(sec);
    } catch (error) {
        next(createError(500,"Erreur lors de la création de la Section", error.message))   
    }
}
exports.findSect = async(req,res,next)=>{
    try {
        /**
         * const doc = await DocsAcademiques.findByPk(req.params.id);
        res.status(200).json(doc);
         */
        const sec = await SectionsEtudiants.findByPk(req.params.id);
        res.status(200).json(sec);
    } catch (error) {
        next(createError(500,"Erreur lors de la création de la Section", error.message)) 
    }
}
exports.updateSect = async(req,res,next)=>{
    try {
        const [updateRow] = await SectionsEtudiants.update(req.body,{
            where : {codeSect : req.params.id}
        });
        if(updateRow === 0) return next(createError(404,"La sextion à modifier est inexistante"));
        const sect = await SectionsEtudiants.findOne({ where : { codeSect : req.params.id }});
        return res.status(200).json(sect);
    } catch (error) {
        next(createError(500,"Erreur lors de la création de la Section", error.message)) 
    }
}
exports.deleteSection = async(req,res,next)=>{
    try {
        const deleted = await SectionsEtudiants.destroy({
            where : {codeSect:req.params.id}
        });
        if(deleted===0) return next(createError(404,"La section à supprimer est inexistante"));
        res.status(200).json({message : "Suppression effectuée"});
    } catch (error) {
        next(createError(500,"Erreur lors de la création de la Section", error.message)) 
    }
}