const mysql = require('mysql2');

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'chamados_db',
    port: 3306
});

conexao.connect((erro) => {
    if (erro) {
        console.error('Erro ao conectar ao MySQL:', erro);
        return;
    }

    console.log('MySQL conectado com sucesso!');
});

module.exports = conexao;