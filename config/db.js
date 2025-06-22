const sequelize = require("sequelize");
const env = require("./index");
console.log("🙇‍♀️ Initialisation de la connection mysql");;

const db = new sequelize(env.DATABASE,env.USER,env.PASSWORD,{
    host : env.HOST,
    dialect:"mysql",
    port: env.PORT,
    login:false
});
const connection = async () =>{
    try {
        console.log("🆗 tentative de connection ...");
        await db.authenticate();
        console.log("✅ Connection réussie");
        
    } catch (error) {
        console.log("❌ Erreur : ",error);
        
    }
}
connection();
module.exports = db;