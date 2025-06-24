const {Enseignants} = require("../models");
const createError = require("../middlewares/error");

exports.createEnseignant = async(req,res,next)=>{
    try {
        /**
         * const doc = await DocsAcademiques.create({
            idDoc:req.body.idDoc.toUpperCase(),
            libeDoc:req.body.libeDoc.toUpperCase()
        });
        console.log(req.body.idDoc);
        res.status(201).json(doc);
         */
        const ens = await Enseignants.create(req.body);
        res.status(201).json(ens);
    } catch (error) {
        next(createError(500,"Erreur lors de la création de l'Enseignant ", error.message))
    }
}