const TournamentService = require('../../services/tournament/tournamentService');

class TournamentController {

  static async actionIndex(req, res) {
    try {
      const Tournament = await TournamentService.getTournament();

      return res.json({ status: 'success', data: Tournament });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ status: 'error', data: error.message });
    }
  }

}

module.exports = TournamentController;
