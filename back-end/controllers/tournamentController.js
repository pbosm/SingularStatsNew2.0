const TournamentService = require('../services/tournamentService');

class TournamentController {

  // static async getTeamInfo(req, res) {
  //   try {
  //     const { id } = req.params;
  //     const TeamInfo = await TournamentService.getTeamInfo(id);

  //     return res.json({ status: 'success', data: TeamInfo });
  //   } catch (error) {
  //     console.error(error);
  //     return res.status(500).json({ status: 'error', data: error.message });
  //   }
  // }

  static async getIndex(req, res) {
    try {
      const lastGames = await TournamentService.getLastGames();

      return res.json({ status: 'success', data: lastGames });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ status: 'error', data: error.message });
    }
  }

}

module.exports = TournamentController;
