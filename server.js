const express = require("express");
const app = express();
const env = require("./config/index");
const {db} = require("./models/index");

console.log("Démarrage du server ...");
//IMPORTATIONS DES ROUTES
const gradeRoutes = require("./routes/grade.route");
const docRoutes = require("./routes/docs.routes");
const sectionRoutes = require("./routes/Sections.routes");
const enseignantsRoutes = require("./routes/Enseignant.routes");
const etudiantsRoutes = require("./routes/etudiants.routes");
const fraisRoutes = require("./routes/Frais.routes");
const ueRoutes = require("./routes/UE.routes");
const optsRoutes = require("./routes/Options.routes");
const promoRoutes = require("./routes/Promotions.routes");
const sessionRoutes = require("./routes/Sessions.routes");
const cmdDocsRoutes = require("./routes/CommanderDocs.routes");
const ecRoutes = require("./routes/EC.routes");
const avoirRoutes = require("./routes/AvoirGrade.routes");
const pgcRoutes = require("./routes/ProgrammerCours.routes");
const payerRoutes = require("./routes/PayerFrais.routes");
const inscritRoutes = require("./routes/Inscriptions.routes");
const evaRoutes = require("./routes/Evaluation.routes");
//PORT
const PORT = env.PORT_SERVER


//MIDDLEWARES
app.use(express.json());

//PREFIX
app.use("/api/grade",gradeRoutes);  
app.use("/api/document",docRoutes);
app.use("/api/sections",sectionRoutes);
app.use("/api/enseignants",enseignantsRoutes);
app.use("/api/etudiants",etudiantsRoutes);
app.use("/api/frais",fraisRoutes);
app.use("/api/opts",optsRoutes);
app.use("/api/promotions",promoRoutes);
app.use("/api/sessions",sessionRoutes);
app.use("/api/ues",ueRoutes);
app.use("/api/commander_doc",cmdDocsRoutes);
app.use("/api/ecs",ecRoutes);
app.use("/api/grade-agent", avoirRoutes);
app.use("/api/programmer",pgcRoutes);
app.use("/api/payer-frais",payerRoutes);
app.use("/api/inscriptions",inscritRoutes);
app.use("/api/evaluations",evaRoutes);
//Middleware de gestion d'Erreurs
app.use((err,req,res,next)=>{
    const status = err.status || 500;
    const message = err.message || "Une erreur est survenue"
    const details = err.details || null;

    res.status(status).json({ error : {
        status,
        message,
        details
    }})
});

//SEVRER
const startServer = async() => {
    try {
        await db.sync({Force : false});
        console.log("✅ Connection à la BDD effective ");
        
        app.listen(PORT, ()=>{
            console.log("Server démarré sur http://localhost:" + PORT);
            
        });
    } catch (error) {
        console.log("X Erreur de la base de donnée : ", error); 
    }
}
startServer();

