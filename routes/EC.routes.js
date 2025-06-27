const express = require("express");
const router = express.Router();
const CONTROL = require("../controllers/EC.controller");



//Les routes
router.post("/create",CONTROL.createEC);
router.get("/",CONTROL.findAllEC);
router.get("/:id",CONTROL.findEC);
router.put("/update/:id",CONTROL.updateEC);
router.delete("/delete/:id",CONTROL.deleteEC);


module.exports = router;