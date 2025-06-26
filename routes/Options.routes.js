const express = require("express");
const router = express.Router();
const CONTROL = require("../controllers/Options.controller");


//Les routes
router.post("/create",CONTROL.createOptions);
router.get("/", CONTROL.findAllOptions);
router.get("/:id",CONTROL.findOptions);
router.put("/update/:id",CONTROL.updateOption);
router.delete("/delete/:id",CONTROL.deleteOptions);




module.exports = router