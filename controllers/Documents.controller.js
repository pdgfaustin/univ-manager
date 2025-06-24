const {DocsAcademiques} = require("../models");
const createError = require("../middlewares/error");

exports.CreateDoc = async(req,res,next)=>{
    try {
        console.log(req.body.idDoc);
        const doc = await DocsAcademiques.create({
            idDoc:req.body.idDoc.toUpperCase(),
            libeDoc:req.body.libeDoc.toUpperCase()
        });
        console.log(req.body.idDoc);
        res.status(201).json(doc);
    } catch (error) {
        next(createError(500,"Erreur lors de la création du Document ", error.message))
    }
}
exports.findAllDocs = async(req,res,next)=>{
    try {
        const doc = await DocsAcademiques.findAll();
        res.status(200).json(doc);
    } catch (error) {
        next(createError(500,"Erreur lors de la création du Document ", error.message))
    }
}
exports.findDocs = async(req,res,next)=>{
    try {
        const doc = await DocsAcademiques.findByPk(req.params.id);
        res.status(200).json(doc);
    } catch (error) {
        next(createError(500,"Erreur lors de la création du Document ", error.message))
    }
}
exports.updateDocs = async(req,res,next)=>{
    try {
        const [updateRows] = await DocsAcademiques.update(req.body,{
            where : { idDoc : req.params.id }
        });
        
        if(updateRows === 0) return next(createError(404,"Document à modufier non existant"));
        
        const docs = await DocsAcademiques.findOne({where : { idDoc : req.params.id }});
        return res.status(200).json(docs);
    } catch (error) {
        next(createError(500,"Erreur lors de la création du Document ", error.message))
    }
}
exports.deleteDOC = async(req,res,next)=>{
    try {
        const deleted = await DocsAcademiques.destroy({
            where : {idDoc : req.params.id}
        });
        if(deleted === 0) return next(createError(404,"Elément à modifier introuvable"));

        res.status(200).json({message : "Article supprimé avec succès"});
    } catch (error) {
        next(createError(500,"Erreur lors de la création du Document ", error.message))
    }
}