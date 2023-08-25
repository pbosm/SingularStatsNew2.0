const express = require('express');
const router = express.Router();
const TournamentStatsController = require('../../controllers/tournamentStats/tournamentStatsController');

router.get('/', TournamentStatsController.getLastGames);
// router.get('/:id', TournamentController.getTeamInfo);

module.exports = router;