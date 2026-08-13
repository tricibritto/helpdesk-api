const db = require('../database/db');
const listarChamados = (req, res) => {

    const sql = 'SELECT * FROM chamados ORDER BY id DESC';

    db.query(sql, (erro, resultados) => {
        if (erro) {
            console.error(erro);
            return res.status(500).json({
                erro: 'Erro ao buscar chamados'
            });
        }

        res.status(200).json(resultados);
    });
};

const buscarChamado = (req, res) => {

    const id = req.params.id;
    const sql = 'SELECT * FROM chamados WHERE id = ?';

    db.query(sql, [id], (erro, resultados) => {
        if (erro) {
            console.error(erro);
            return res.status(500).json({
                erro: 'Erro ao buscar chamado'
            });
        }

        if (resultados.length === 0) {
            return res.status(404).json({
                erro: 'Chamado não encontrado'
            });
        }

        res.status(200).json(resultados[0]);
    });
};

const criarChamado = (req, res) => {
    const {
        titulo,
        descricao,
        setor_solicitante,
        prioridade
    } = req.body;

    if (
        !titulo ||
        !descricao ||
        !setor_solicitante ||
        !prioridade
    ) {

        return res.status(400).json({
            erro: 'Preencha todos os campos obrigatórios'
        });
    }

    const sql = `
        INSERT INTO chamados
        (
            titulo,
            descricao,
            setor_solicitante,
            prioridade,
            status
        )
        VALUES (?, ?, ?, ?, 'Aberto')
    `;

    const valores = [
        titulo,
        descricao,
        setor_solicitante,
        prioridade
    ];

    db.query(sql, valores, (erro, resultado) => {
        if (erro) {
            console.error(erro);
            return res.status(500).json({
                erro: 'Erro ao cadastrar chamado'
            });
        }

        res.status(201).json({
            mensagem: 'Chamado cadastrado com sucesso',
            chamado: {
                id: resultado.insertId,
                titulo: titulo,
                descricao: descricao,
                setor_solicitante: setor_solicitante,
                prioridade: prioridade,
                status: 'Aberto'
            }
        });
    });
};

const atualizarChamado = (req, res) => {
    const id = req.params.id;
    const {
        titulo,
        descricao,
        setor_solicitante,
        prioridade,
        status
    } = req.body;

    if (
        !titulo ||
        !descricao ||
        !setor_solicitante ||
        !prioridade ||
        !status
    ) {
        return res.status(400).json({
            erro: 'Preencha todos os campos'
        });
    }

    const sql = `
        UPDATE chamados
        SET
            titulo = ?,
            descricao = ?,
            setor_solicitante = ?,
            prioridade = ?,
            status = ?
        WHERE id = ?
    `;

    const valores = [
        titulo,
        descricao,
        setor_solicitante,
        prioridade,
        status,
        id
    ];

    db.query(sql, valores, (erro, resultado) => {
        if (erro) {
            console.error(erro);
            return res.status(500).json({
                erro: 'Erro ao atualizar chamado'
            });
        }

        if (resultado.affectedRows === 0) {
            return res.status(404).json({
                erro: 'Chamado não encontrado'
            });
        }
        res.status(200).json({
            mensagem: 'Chamado atualizado com sucesso'
        });

    });
};

const excluirChamado = (req, res) => {
    const id = req.params.id;
    const sql = 'DELETE FROM chamados WHERE id = ?';

    db.query(sql, [id], (erro, resultado) => {
        if (erro) {
            console.error(erro);
            return res.status(500).json({
                erro: 'Erro ao excluir chamado'
            });
        }

        if (resultado.affectedRows === 0) {
            return res.status(404).json({
                erro: 'Chamado não encontrado'
            });
        }
        res.status(200).json({
            mensagem: 'Chamado excluído com sucesso'
        });

    });
};
module.exports = {
    listarChamados,
    buscarChamado,
    criarChamado,
    atualizarChamado,
    excluirChamado
};