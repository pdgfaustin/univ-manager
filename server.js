const express = require("express");
const app = express();
const env = require("./config/index");
const {db} = require("./models");

console.log("Démarrage du server ...");
//IMPORTATIONS DES ROUTES
const gradeRoutes = require("./routes/grade.route");
const docRoutes = require("./routes/docs.routes");
//PORT
const PORT = env.PORT_SERVER


//MIDDLEWARES
app.use(express.json());

//PREFIX
app.use("/api/grade",gradeRoutes);  
app.use("/api/document",docRoutes);
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

