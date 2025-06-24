const dotenv = require ("dotenv");
dotenv.config();


const ENV = {
    PORT_SERVER : process.env.PORT_SERVER,
    PORT : process.env.PORT,
    HOST : process.env.HOST,
    USER : process.env.BD_USER,
    PASSWORD : process.env.PASSWORD,
    DATABASE : process.env.DATABASE,
    DIALECT : process.env.DIALECT,
    TOKEN : process.env.TOKEN

}
module.exports = ENV;