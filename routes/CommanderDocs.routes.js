const express = require("express");
const router = express.Router();
const CONTROL = require("../controllers/CommanderDoc.controller");


//Les routes
router.post("/create",CONTROL.createCommande);
router.get("/",CONTROL.findAllCommande);
router.get("/:id",CONTROL.findCommande);

module.exports = router;