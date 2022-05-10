const express = require('express');
const router = express.Router();
const path = require('path')
const filmesController = require('../controllers/filmesController');
const multer = require('multer')

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

// Listagem De Filmes
router.get("/", filmesController.todosFilmes)

//Listagem Por ID
router.get("/:id", filmesController.filmesPorId)

//Criação de Filmes
router.post("/",upload.single('avatar') ,filmesController.criacaoDeFilmes)

//Atualização de Filmes
router.put('/:id', filmesController.atualizarFilmes)

//Deleção de Filmes
router.delete('/:id', filmesController.deletarFilme)

module.exports = router;