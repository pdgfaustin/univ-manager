const express = require("express");
const router = express.Router();
const CONTROL = require("../controllers/Documents.controller");

router.post("/create",CONTROL.CreateDoc);
router.get("/",CONTROL.findAllDocs);
router.get("/:id",CONTROL.findDocs);
router.put("/update/:id",CONTROL.updateDocs);
router.delete("/delete/:id",CONTROL.deleteDOC);

module.exports = router;