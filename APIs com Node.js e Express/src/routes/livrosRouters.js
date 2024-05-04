import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

routes.get("/livros", LivroController.getAllLivros);
routes.get("/livros/busca", LivroController.getLivroByPublishing);
routes.get("/livros/:id", LivroController.getLivrosById);
routes.post("/livros", LivroController.createLivro);
routes.put("/livros/:id", LivroController.updateLivroById);
routes.delete("/livros/:id", LivroController.deleteLivroById);


export default routes;