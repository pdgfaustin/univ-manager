const {SessionsEtudes} = require("../models");
const createError = require("../middlewares/error");



exports.createSession = async(req, res, next) => {
    try {
        const sess = await SessionsEtudes.create(req.body);
        res.status(203).json(sess);
    } catch (error) {
        next(createError(500, error.message));
    }
}
exports.findAllSessions = async(req, res, next) => {
    try {
        const sess = await SessionsEtudes.findAll();
        res.status(200).json(sess);
    } catch (error) {
        next(createError(500,error.message))
    }
}
exports.findSession = async(req, res, next) => {
    try {
        const sess = await SessionsEtudes.findByPk(req.params.id);
        res.status(200).json(sess);
    } catch (error) {
        next(createError(500,error.message))
    }
}
exports.updateSession = async(req, res, next) => {
    try {
        const [upSess] = await SessionsEtudes.update(req.body,
            {
                where : {codeSess : req.params.id}
            }
        );
        if(upSess === 0) return next(createError(404, "La session à modifier est inexistante"));

        const sess = await SessionsEtudes.findOne({where : { codeSess : req.params.id}});
        res.status(200).json(sess);
    } catch (error) {
        next(createError(500,error.message))
    }
}
exports.deleteSession = async(req, res, next) =>{
    try {
        const del = await SessionsEtudes.destroy({where : {codeSess : req.params.id}});
        if(del === 0) return next(createError(404, "Session à modifier inexistante"));

        res.status(200).json({message : "Supression effectuée"});
    } catch (error) {
        next(createError(500,error.message))
    }
}