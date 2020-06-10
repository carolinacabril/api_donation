const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController')


router.post('/', UserController.index);
router.post('/autenticacao', UserController.autenticacao)

module.exports = router;
