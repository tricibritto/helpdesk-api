const express = require('express');

const {
    listarChamados,
    buscarChamado,
    criarChamado,
    atualizarChamado,
    excluirChamado
} = require('../controllers/chamadoController');


const router = express.Router();

router.get('/chamados', listarChamados);

router.get('/chamados/:id', buscarChamado);

router.post('/chamados', criarChamado);

router.put('/chamados/:id', atualizarChamado);

router.delete('/chamados/:id', excluirChamado);

module.exports = router;