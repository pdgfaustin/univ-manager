const {UE} = require("../models");
const createError = require("../middlewares/error");

exports.createUE = async(req,res,next)=>{
    try {
        const UE = await UE.create({
            idDoc:req.body.codeUE.toUpperCase(),
            libeDoc:req.body.libeUE.toUpperCase(),
            maxUE:req.body.maxUE,
            creditUE:req.body.creditUE,
            codeOpt:req.body.codeOpt,
            codeSess:req.body.codeSess
        });
        console.log(req.body.idDoc);
        res.status(201).json(doc);
    } catch (error) {
        next(createError(500,"Erreur lors de la création de l'Unité d'Enseignement ", error.message))
    }
}