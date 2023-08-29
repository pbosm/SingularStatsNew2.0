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

  static async searchTeamname(req, res) {
    // const { teamname } = req.query;
    // const { split } = req.query;
    const teamname = 'Red'; // para testes
    const split = 'split 2';  // para testes

    // if (!teamname || !split) {
    //   return res.status(400).json({ message: 'faltam dados na consulta.' });
    // }

    try {
      const resultSearch = await TournamentStatsService.search(teamname, split);

      return res.json({ status: 'success', data: resultSearch });
    } catch (error) {
      console.error(error);
      return [];
    }
  }

}

module.exports = TournamentStatsController;
