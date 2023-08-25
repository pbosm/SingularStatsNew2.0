const TournamentStatsService = require('../../services/tournamentStats/tournamentStatsService');

class TournamentStatsController {

  static async getLastGames(req, res) {
    try {
      const tournamentStats = await TournamentStatsService.actionIndex();

      return res.json({ status: 'success', data: tournamentStats });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ status: 'error', data: error.message });
    }
  }

}

module.exports = TournamentStatsController;
