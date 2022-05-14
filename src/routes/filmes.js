const express = require('express');
const router = express.Router();
const path = require('path')
const filmesController = require('../controllers/filmesController');
const multer = require('multer')
const { body } = require('express-validator')
const auth = require('../middlewares/auth')

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
  body("nome").notEmpty().withMessage("Digite um Nome valido").isString(),
  body("email").notEmpty().withMessage("Digite um Email valido").isEmail(),
];

// Listagem De Filmes
router.get("/", filmesController.todosFilmes)

//Listagem Por ID
router.get("/:id", filmesController.filmesPorId)

//Criação de Filmes
router.post("/",validacoes, upload.single('avatar') ,filmesController.criacaoDeFilmes)

//Atualização de Filmes
router.put('/:id', filmesController.atualizarFilmes)

//Deleção de Filmes
router.delete('/:id', filmesController.deletarFilme)

module.exports = router;