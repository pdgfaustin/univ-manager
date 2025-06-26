const express = require("express");
const router = express.Router();
const CONTROL = require("../controllers/Frais.controller");

//Les Routes

router.post("/create",CONTROL.createFrais);
router.get("/",CONTROL.findAllFrais);
router.get("/:id",CONTROL.findFrais);
router.put("/update/:id",CONTROL.updateFrais);
router.delete("/delete/:id",CONTROL.deleteFrais);

module.exports = router;