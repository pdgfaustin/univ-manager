const express = require("express");
const router = express.Router();
const CONTROL = require("../controllers/Promotion.controller");


//Les routes

router.post("/create", CONTROL.createPromotion);
router.get("/",CONTROL.findAllPromotions);
router.get("/:id",CONTROL.findPromotion);
router.put("/update/:id",CONTROL.updatePromotion);
router.delete("/delete/:id",CONTROL.deletePromotion);



module.exports = router;