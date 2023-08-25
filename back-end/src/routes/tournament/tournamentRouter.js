const express = require('express');
const router = express.Router();
const TournamentController = require('../../controllers/tournament/tournamentController');

router.get('/', TournamentController.getTournament);
// router.get('/:id', TournamentController.getTeamInfo);

module.exports = router;