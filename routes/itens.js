const express = require('express');
const router = express.Router();
const ItemController = require('../controllers/ItensController');

router.get('/', ItemController.listar);
router.post('/', ItemController.create);
router.delete('/:id', ItemController.delete);

module.exports = router;