const {UE} = require("../models");
const createError = require("../middlewares/error");

exports.createUE = async(req,res,next)=>{
    try {
        const ue = await UE.create(req.body);
        let result = {
            code:201,
            message:"UE créer avec succès",
            data:ue
        }
        res.status(201).json(result);
    } catch (error) {
        next(createError(500,"Erreur lors de la création de l'Unité d'Enseignement ", error.message))
    }
}

exports.findAllUE = async(req, res, next) => {
    try {
        const ue = await UE.findAll();
        let data = {
            'code' : 200,
            'message' : 'La liste des UES',
            'data': ue
         }
        res.status(200).json(data);
    } catch (error) {
        next(createError(500,error.message))
    }
}
exports.findUE = async(req, res, next) =>{
    try {
        const ue = await UE.findByPk(req.params.id);
        let result = {
            code:200,
            message:"UE trouvé",
            data:ue
        }
        res.status(200).json(result);
    } catch (error) {
        next(createError(500,error.message))
    }
}
exports.updateUE = async(req, res, next) => {
    try {
        const [updRows] = await UE.update(req.body,
            { where : {codeUE : req.params.id}}
        );
        if(updRows === 0) return next(createError(404, "l'UE à modifier est inexistante"));

        const ue = await UE.findOne(
            {where : {codeUE : req.params.id}}
         );

         let data = {
            'code' : 200,
            'message' : 'Modification effectuée avec success',
            'data': ue
         }

        res.status(200).json(data);
    } catch (error) {
        next(createError(500,error.message));
    }
}
exports.deleteUE = async(req, res, next) =>{
    try {
        const del = await UE.destroy({where : {codeUE : req.params.id}});
        let donnee = {
            code:200,
            message:"UE Supprimé"
        }
        res.status(200).json(donnee);
    } catch (error) {
        next(createError(500,error.message));
    }
}
