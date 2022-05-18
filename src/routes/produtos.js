const express = require('express');
const router = express.Router();
const { body } = require('express-validator')

let produtosController = require('../controllers/produtosController')

const validacoes = [
    body("vendedor").notEmpty().withMessage('Digite o Nome Do Vendedor').isString(),
    body("produto").notEmpty().withMessage('Digite o Nome Do Produto'),
    body("preco").notEmpty().withMessage('Digite o Preço do Produto'),
  ];

//Criar um Novo Produto

router.get('/criar',validacoes, produtosController.cadastroProduto);
router.post('/criar',validacoes, produtosController.formProduto);


module.exports = router;