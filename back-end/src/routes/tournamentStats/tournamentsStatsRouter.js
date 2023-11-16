const express = require('express');
const router = express.Router();
const TournamentStatsController = require('../../controllers/tournamentStats/tournamentStatsController');
// const Cblol = require('../../models/cblol/cblolModel');

router.get('/', TournamentStatsController.actionIndex);

// router.post('/', async (req, res) => {
//     try {
//     //   const { teamname, split } = req.query;
//     const teamname = 'Red'; // para testes
//     const split = 'split 2';  // para testes

//     if (!teamname || !split) {
//         return res.status(400).json({ message: 'Nome do time ou split não selecionados.' });
//     }

//       const resultSearch = await Cblol.searchTeam(teamname, split);

//       return res.json({ status: 'success', data: resultSearch });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Erro ao buscar os dados.' });
//     }
// });
  
module.exports = router;