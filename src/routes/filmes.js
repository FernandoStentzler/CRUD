const express = require('express');
const router = express.Router();
const filmesController = require('../controllers/filmesController');
const multer = require('multer')

// Listagem De Filmes
router.get("/", filmesController.todosFilmes)

//Listagem Por ID
router.get("/:id", filmesController.filmesPorId)

//Criação de Filmes
router.post("/", filmesController.criacaoDeFilmes)

//Atualização de Filmes
router.put('/:id', filmesController.atualizarFilmes)

//Deleção de Filmes
router.delete('/:id', filmesController.deletarFilme)

module.exports = router;