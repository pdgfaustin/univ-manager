const express = require("express");
const router = express.Router();
const CONTROL = require("../controllers/Inscriptions.controller");


//Les routes

router.post("/create",CONTROL.createInscription);
router.get("/",CONTROL.findAllInscription);
router.get("/:id",CONTROL.findInscription);



module.exports = router;