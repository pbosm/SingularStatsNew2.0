const TournamentStatsService = require('../../services/tournamentStats/tournamentStatsService');

class TournamentStatsController {

  static async actionIndex(req, res) {
    try {
      const tournamentStats = await TournamentStatsService.getLastGames();

      return res.json({ status: 'success', data: tournamentStats });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ status: 'error', data: error.message });
    }
  }

}

module.exports = TournamentStatsController;
