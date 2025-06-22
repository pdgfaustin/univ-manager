const express = require("express");
const app = express();
const env = require("./config/index");
const db = require("./config/db");

console.log("Démarrage du server ...");
//IMPORTATIONS DES ROUTES


//PORT
const PORT = env.PORT || 3001;


//MIDDLEWARES


//PREFIX


//SEVRER
const startServer = async() => {
    try {
        await db.sync({Force : false});
        console.log("✅ Connection à la BDD effective ");
        
        app.listen(PORT, ()=>{
            console.log("Server démarré sur le PORT : " + PORT);
            
        });
    } catch (error) {
        console.log("X Erreur de la base de donnée : ", error); 
    }
}
startServer();

