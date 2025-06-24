const express = require("express");
const router = express.Router();
const CONTROL = require("../controllers/Section.controller");

//Les Routes
router.post("/create",CONTROL.createSection);
router.get("/",CONTROL.findAllSec);
router.get("/:id",CONTROL.findSect);
router.put("/update/:id",CONTROL.updateSect);
router.delete("/delete/:id",CONTROL.deleteSection);


module.exports = router;