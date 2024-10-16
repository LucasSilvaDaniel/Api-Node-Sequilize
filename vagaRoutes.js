const express = require('express');
const router = express.Router();
const controller = require('../controllers/vagaController');

router.post('/', controller.vagasCadastro); 
router.get('/', controller.vagasListar);
router.get('/:id', controller.vagasIdDetalhes);
router.put('/:id', controller.vagasIdAtualizar);
router.delete('/:id', controller.vagasIdDelete);
router.get('/cargo/:cargo', controller.cargo);
router.get('/localizacao/:cidade', controller.cidade);

module.exports = router;
