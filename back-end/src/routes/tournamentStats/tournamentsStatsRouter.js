const express = require('express');
const router = express.Router();
const TournamentController = require('../../controllers/tournamentStats/tournamentStatsController');

router.get('/', TournamentController.getIndex);
// router.get('/:id', TournamentController.getTeamInfo);

module.exports = router;