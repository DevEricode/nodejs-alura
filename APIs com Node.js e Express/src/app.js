import express from "express";
import connectionDB from "./config/dbConnect.js";
import routes from "./routes/index.js";

const app = express();
routes(app);

const connection = await connectionDB();

connection.on("error", (error) => {
    console.error("Houve um erro de conexão com o banco de dados!" + error);
});

connection.once("open", () => {
    console.log("Conexão com o banco de dados feita com sucesso!");
});

export default app;