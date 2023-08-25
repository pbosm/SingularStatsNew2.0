const TournamentService = require('../../services/tournament/tournamentService');

class TournamentController {

  static async getTournament(req, res) {
    try {
      const Tournament = await TournamentService.actionIndex();

      return res.json({ status: 'success', data: Tournament });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ status: 'error', data: error.message });
    }
  }

}

module.exports = TournamentController;
