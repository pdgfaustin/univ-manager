const express = require("express");
const router = express.Router();
const CONTROL = require("../controllers/Enseignant.controller");


//Les routes
router.post("/create",CONTROL.createEnseignant);


module.exports = router;