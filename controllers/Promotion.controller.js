const {PromotionsEtudiant} = require("../models");
const createError = require("../middlewares/error");


exports.createPromotion = async(req, res, next) => {
    try {
        const promo = await PromotionsEtudiant.create(req.body);
        res.status(203).json(promo);
    } catch (error) {
        next(createError(500,error.message))
    }
}
exports.findAllPromotions = async(req, res, next) => {
    try {
        const promo = await PromotionsEtudiant.findAll();
        res.status(200).json(promo);
    } catch (error) {
        next(createError(500, error.message))
    }
}
exports.findPromotion = async(req, res, next) => {
    try {
        const promo  = await PromotionsEtudiant.findByPk(req.params.id);
        res.status(200).json(promo);
    } catch (error) {
        next(createError(500,error.message));
    }
}
exports.updatePromotion = async(req, res, next) => {
    try {
        const [pro] = await PromotionsEtudiant.update(req.body, {
            where : {codePro : req.params.id}
        });

        if(pro === 0) return next(createError(404, "la promotion à modifier est inexistante"));

        const promo = await PromotionsEtudiant.findOne({where : {codePro : req.params.id}});
        res.status(200).json(promo);
    } catch (error) {
        next(createError(500, error.message))
    }
}
exports.deletePromotion = async(req, res, next) => {
    try {
        const del = await PromotionsEtudiant.destroy({where : {codePro : req.params.id}});
        if(del === 0) return next(createError(404,"La promotion à supprimer est inexistante"));

        const promo = await PromotionsEtudiant.findOne({where : {codePro : req.params.id}});
        res.status(200).json({message : "Suppression effectuée"});
    } catch (error) {
        next(createError(500,error.message));
    }
}