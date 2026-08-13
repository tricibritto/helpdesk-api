const express = require('express');
const cors = require('cors');
const chamadoRoutes = require('./routes/chamadoRoutes');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', chamadoRoutes);
app.get('/', (req, res) => {

    res.json({
        mensagem: 'API de Gerenciamento de Chamados funcionando!'
    });

});

const PORT = 3000;

app.listen(PORT, () => {

    console.log(`Servidor rodando em http://localhost:3000`);
});