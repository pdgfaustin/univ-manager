const express = require("express");
const router = express.Router();
const CONTROL = require("../controllers/Grade.controller");


//Les routes
router.post("/add",CONTROL.createGrade);
router.get("/",CONTROL.getAll);
router.get("/:id",CONTROL.getGrade);
router.put("/update/:id",CONTROL.updateGrade);
router.delete("/delete/:id",CONTROL.deteGrade);


module.exports = router;