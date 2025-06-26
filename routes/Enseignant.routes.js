const express = require("express");
const router = express.Router();
const CONTROL = require("../controllers/Enseignant.controller");


//Les routes
router.post("/create",CONTROL.createEnseignant);
router.get("/",CONTROL.findAllEnseignants);
router.get("/:id",CONTROL.findEnseignants);
router.put("/update/:id",CONTROL.updateEnseignants);
router.delete("/delete/:id",CONTROL.deleteEnseignants);


module.exports = router;