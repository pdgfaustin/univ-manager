const express = require("express");
const router = express.Router();
const CONTROL = require("../controllers/AvoirGrade.controller");



// Les Routes

router.post("/create",CONTROL.createAvoirGrade);
router.get("/",CONTROL.findAllAvoir);
router.get("/:id",CONTROL.findAvoir);


module.exports = router