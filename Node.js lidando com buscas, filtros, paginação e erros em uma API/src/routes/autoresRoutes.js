import express from 'express';
import AutorController from '../controllers/autoresController.js';
import paginar from '../middlewares/paginar.js';

// eslint-disable-next-line new-cap
const router = express.Router();

router
	.get('/autores', AutorController.listarAutores, paginar)
	.get('/autores/:id', AutorController.listarAutorPorId)
	.post('/autores', AutorController.cadastrarAutor)
	.put('/autores/:id', AutorController.atualizarAutor)
	.delete('/autores/:id', AutorController.excluirAutor);

export default router;
