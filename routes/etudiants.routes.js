const express = require("express");
const router = express.Router();
const CONTROL = require("../controllers/Etudiants.controller");


//Les routes
router.post("/create",CONTROL.createEtudiants);
router.get("/",CONTROL.findAllEtudiants);
router.get("/:id",CONTROL.findEtudiant);
router.put("/update/:id",CONTROL.updateEtudiant);
router.delete("/delete/:id",CONTROL.deleteEtudiant);

module.exports = router;