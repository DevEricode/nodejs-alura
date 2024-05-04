import express from "express";
import livros from "./livrosRouters.js";
import autores from "./autoresRouters.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Hello World Nodejs"))

    app.use(express.json(), livros, autores);
};

export default routes;
