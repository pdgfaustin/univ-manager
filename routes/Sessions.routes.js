const express = require("express");
const router = express.Router();
const CONTROL = require("../controllers/SessionsEtud.controller");


//Les routes
router.post("/create", CONTROL.createSession);
router.get("/",CONTROL.findAllSessions);
router.get("/:id",CONTROL.findSession);
router.put("/update/:id",CONTROL.updateSession);
router.delete("/delete/:id",CONTROL.deleteSession);


module.exports = router;