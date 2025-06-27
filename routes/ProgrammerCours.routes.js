const express = require("express");
const router = express.Router();
const CONTROL = require("../controllers/ProgrammerCours.controller");



//Les routes
router.post("/create",CONTROL.createProgramme);
router.get("/",CONTROL.findAllProgramme);
router.get("/:id",CONTROL.findPGC)


module.exports = router