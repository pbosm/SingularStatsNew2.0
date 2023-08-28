const express = require('express');
const router = express.Router();
const TournamentStatsController = require('../../controllers/tournamentStats/tournamentStatsController');

router.get('/', TournamentStatsController.getLastGames);
// router.post('/', TournamentStatsController.searchTeamname);

module.exports = router;