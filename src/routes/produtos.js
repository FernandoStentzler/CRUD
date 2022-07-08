const express = require('express');
const router = express.Router();
const { body } = require('express-validator')
const multer = require('multer')
const auth = require('../middlewares/auth')

let produtosController = require('../controllers/produtosController')

const multerStorage = multer.diskStorage({
  destination: function (req, file, cb) {
      const folder = path.join(__dirname, "../../public/images/my-uploads");
      cb(null, folder);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '.jpg');
  },
});

const upload = multer({ storage: multerStorage });

const validacoes = [
    body("vendedor").notEmpty().withMessage('Digite o Nome Do Vendedor').isString(),
    body("produto").notEmpty().withMessage('Digite o Nome Do Produto'),
    body("preco").notEmpty().withMessage('Digite o Preço do Produto'),
  ];

//Criar um Novo Produto

router.get('/criar',produtosController.cadastroProduto);
router.post('/criar',validacoes,upload.single('imagenProduto'), produtosController.formProduto);

//listar Todos os Produtos

router.get('/',auth, produtosController.listarProdutos);


module.exports = router;