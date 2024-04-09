const express = require('express');
const router = express.Router();

//rota para tournamentStats
const tournamentStatsRouter = require('./tournamentStats/TournamentsStatsRouter');
router.use('/v1/home', tournamentStatsRouter);

//rota para tournament
const tournamentRouter = require('./tournament/TournamentRouter');
router.use('/v1/tournament', tournamentRouter);

module.exports = router;
