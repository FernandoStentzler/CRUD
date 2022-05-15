var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController')

/* Create New User */

router.get('/creat', userController.registryForm);
router.post('/creat', userController.saveForm);

// Login New User

router.get('/login', userController.loginForm);
router.post('/login', userController.logarUser);

module.exports = router;
