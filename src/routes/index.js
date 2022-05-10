var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Meu Projeto Express' });
});

router.get("/home",indexController.getHome);
router.get("/confirmarcontato",indexController.confirmarContato);

module.exports = router;
