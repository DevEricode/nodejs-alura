import express from "express";
import connectionDB from "./config/dbConnect.js";

const app = express();

const connection = await connectionDB();

connection.on("error", (error) => {
    console.error("Houve um erro de conexão com o banco de dados!" + error);
});

connection.once("open", () => {
    console.log("Conexão com o banco de dados feita com sucesso!");
});

app.get("/", (req, res) => {
    res.status(200).send('Hello World');
});

export default app;