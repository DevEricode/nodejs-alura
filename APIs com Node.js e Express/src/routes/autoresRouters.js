import express from "express";
import AutorController from "../controllers/autorController.js";

const routes = express.Router();

routes.get("/autor", AutorController.getAllAutor);
routes.get("/autor/:id", AutorController.getAutorById);
routes.post("/autor", AutorController.createAutor);
routes.put("/autor/:id", AutorController.updateAutorById);
routes.delete("/autor/:id",AutorController.deleteAutorById);


export default routes;