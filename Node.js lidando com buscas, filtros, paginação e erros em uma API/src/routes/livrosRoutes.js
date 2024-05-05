import express from 'express';
import LivroController from '../controllers/livrosController.js';

// eslint-disable-next-line new-cap
const router = express.Router();

router
	.get('/livros', LivroController.listarLivros)
	.get('/livros/busca', LivroController.listarLivroPorEditora)
	.get('/livros/:id', LivroController.listarLivroPorId)
	.post('/livros', LivroController.cadastrarLivro)
	.put('/livros/:id', LivroController.atualizarLivro)
	.delete('/livros/:id', LivroController.excluirLivro);

export default router;
