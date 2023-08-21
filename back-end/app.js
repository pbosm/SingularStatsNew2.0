// app.js
const express = require('express');
const app = express();
const cors = require('cors');

// Middleware para permitir o CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Middleware para parsear o corpo das requisições como JSON
app.use(express.json());

// Configuração das rotas
const tournamentRouter = require('./routes/routeDataInfos');
app.use('/api/data/index', tournamentRouter);

// Inicia o servidor na porta 3000
const PORT = 3300;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
