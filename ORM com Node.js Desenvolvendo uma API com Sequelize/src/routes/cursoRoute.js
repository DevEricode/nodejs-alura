const { Router } = require('express');
const CursoController = require('../controllers/CursoController.js');

const cursoController = new CursoController();

const router = Router();

router.get('/curso', (req, res) => cursoController.pegaTodos(req, res));
router.get('/curso/:id', (req, res) => cursoController.pegaUmPorId(req, res));
router.post('/curso', (req, res) => cursoController.criaNovo(req, res));
router.put('/curso/:id', (req, res) => cursoController.atualiza(req, res));
router.delete('/curso/:id', (req, res) => cursoController.exclui(req, res));

module.exports = router; 