const express = require("express");
const router = express.Router();
const CONTROL = require("../controllers/UE.controller");

//Les Routes

router.post("/create",CONTROL.createUE);
router.get("/",CONTROL.findAllUE);
router.get("/:id",CONTROL.findUE);
router.put("/update/:id",CONTROL.updateUE);
router.delete("/delete/:id",CONTROL.deleteUE);



module.exports = router;