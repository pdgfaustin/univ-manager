const {OptionsEtud} = require("../models");
const createError = require("../middlewares/error");

exports.createOptions = async(req, res, next)=>{
    try {
        const opts = await OptionsEtud.create(req.body);
        res.status(203).json(opts);
    } catch (error) {
        next(createError(500,error.message));
    }
}
exports.findAllOptions = async(req, res, next)=>{
    try {
        const opts = await OptionsEtud.findAll();
        res.status(200).json(opts);
    } catch (error) {
        next(createError(500,error.message))
    }
}
exports.findOptions = async(req, res, next) => {
    try {
        const opts = await OptionsEtud.findByPk(req.params.id);
        res.status(200).json(opts);
    } catch (error) {
        next(createError(500, error.message))
    }
}
exports.updateOption = async(req, res, next) => {
    try {
        const [opt] = await OptionsEtud.update(req.body,{
            where : {codeOpt : req.params.id}
        });
        if(opt === 0) return next(createError(404, "Option inexistant"));
        const opts = await OptionsEtud.findOne({where : {codeOpt : req.params.id}});
        res.status(200).json(opts);
    } catch (error) {
        next(createError(500,error.message))
    }
}
exports.deleteOptions = async(req, res, next) => {
    try {
        const del = await OptionsEtud.destroy({where : {codeOpt : req.params.id}});
        if(del === 0) return next(createError(404,"Option inexistant"));
        res.status(200).json({
            message : "Suppression effectuée"
        });
    } catch (error) {
        next(createError(500,error.message))
    }
}