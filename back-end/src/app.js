// app.js
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

// Middleware para permitir o CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Middleware para parsear o corpo das requisições como JSON
app.use(express.json());

// Configuração das rotas
const tournamentRouter = require('./routes/routeDataInfos');
app.use('/api/data/index', tournamentRouter);

// Inicia o servidor
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
