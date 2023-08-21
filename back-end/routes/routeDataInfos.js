const express = require('express');
const router = express.Router();
const TournamentController = require('../controllers/tournamentController');

router.get('/', TournamentController.getIndex);
// router.get('/:id', TournamentController.getTeamInfo);

module.exports = router;