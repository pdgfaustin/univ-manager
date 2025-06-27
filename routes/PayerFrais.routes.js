const express = require("express");
const router = express.Router();
const CONTROL = require("../controllers/PayerFrais.controller");


//Les routes
router.post("/create",CONTROL.createPaiement);
router.get("/",CONTROL.findAllPay);
router.get("/:id",CONTROL.findPay);


module.exports = router;