const express = require("express");
const router = express.Router();
const CONTROL = require("../controllers/Evaluation.controller");


//Les routes

router.post("/create",CONTROL.createEvaluation);
router.get("/",CONTROL.findAllEvaluations);
router.get("/:id",CONTROL.findEvaluations);


module.exports = router;