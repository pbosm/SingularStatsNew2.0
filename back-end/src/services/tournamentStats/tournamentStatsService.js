const Cblol = require('../../models/cblolModel');
const db = require('../../db/database');
const { Op } = require('sequelize');
const moment = require('moment');

class TournamentStatsService {

  static async actionIndex() {
    try {
      const result = await Cblol.findAll({
        attributes: [
          'teamname',
          'league',
          'split',
          'datahora',
          'side',
          'result',
          'kills',
          'deaths',
          'firstdragon',
          'dragons',
          'firstherald',
          'heralds',
          'barons',
          'firsttower',
          'towers',
          'towersenemy',
          'totalgold',
          [
            db.literal("(SELECT champion FROM cblol AS c WHERE c.position = 'top' AND c.datahora = Cblol.datahora AND c.teamname = Cblol.teamname ORDER BY c.gameid DESC LIMIT 1)"),
            'top_champion'
          ],
          [
            db.literal("(SELECT champion FROM cblol AS c WHERE c.position = 'jng' AND c.datahora = Cblol.datahora AND c.teamname = Cblol.teamname ORDER BY c.gameid DESC LIMIT 1)"),
            'jng_champion'
          ],
          [
            db.literal("(SELECT champion FROM cblol AS c WHERE c.position = 'mid' AND c.datahora = Cblol.datahora AND c.teamname = Cblol.teamname ORDER BY c.gameid DESC LIMIT 1)"),
            'mid_champion'
          ],
          [
            db.literal("(SELECT champion FROM cblol AS c WHERE c.position = 'bot' AND c.datahora = Cblol.datahora AND c.teamname = Cblol.teamname ORDER BY c.gameid DESC LIMIT 1)"),
            'bot_champion'
          ],
          [
            db.literal("(SELECT champion FROM cblol AS c WHERE c.position = 'sup' AND c.datahora = Cblol.datahora AND c.teamname = Cblol.teamname ORDER BY c.gameid DESC LIMIT 1)"),
            'sup_champion'
          ],
        ],
        where: {
          position: 'team',
          league: {
            [Op.not]: 'LPL',
          },
        },
        order: [['datahora', 'DESC']],
        limit: 20
      });

      result.forEach(game => {
        game.result = game.result == 1 ? 'Win' : 'Lose';
        game.datahora = moment(game.datahora).format('DD/MM/YYYY');
      });
      

      return result;
    } catch (error) {
      throw new Error(`Erro ao buscar os dados. ${error.message}`);
    }
  }

}

module.exports = TournamentStatsService;
