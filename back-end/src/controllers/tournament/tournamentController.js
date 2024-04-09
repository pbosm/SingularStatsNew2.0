const TournamentService = require('../../services/tournament/TournamentService');

class TournamentController {

  static async actionIndex(req, res) {
    try {
      // const { split } = req.query;
      const split = false; //fins de teste

      const Tournament = await TournamentService.getTournament(split);

      return res.json({ status: 'success', data: Tournament });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ status: 'error', data: error.message });
    }
  }

}

module.exports = TournamentController;
