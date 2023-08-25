const express = require('express');
const router = express.Router();

//rota para tournamentStats
const tournamentStatsRouter = require('./tournamentStats/tournamentsStatsRouter');
router.use('/v1/home', tournamentStatsRouter);

const tournamentRouter = require('./tournament/tournamentRouter');
router.use('/v1/tournament', tournamentRouter);

module.exports = router;
