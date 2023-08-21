const Tournament = require('../models/tournament');
const sequelize = require('../db/database');
const { Op } = require('sequelize');

class TournamentService {

  static async getLastGames() {
    try {
      const getIndexData = await Tournament.findAll({
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
            sequelize.literal("(SELECT champion FROM cblol AS c WHERE c.position = 'top' AND c.datahora = Cblol.datahora AND c.teamname = Cblol.teamname ORDER BY c.gameid DESC LIMIT 1)"),
            'top_champion'
          ],
          [
            sequelize.literal("(SELECT champion FROM cblol AS c WHERE c.position = 'jng' AND c.datahora = Cblol.datahora AND c.teamname = Cblol.teamname ORDER BY c.gameid DESC LIMIT 1)"),
            'jng_champion'
          ],
          [
            sequelize.literal("(SELECT champion FROM cblol AS c WHERE c.position = 'mid' AND c.datahora = Cblol.datahora AND c.teamname = Cblol.teamname ORDER BY c.gameid DESC LIMIT 1)"),
            'mid_champion'
          ],
          [
            sequelize.literal("(SELECT champion FROM cblol AS c WHERE c.position = 'bot' AND c.datahora = Cblol.datahora AND c.teamname = Cblol.teamname ORDER BY c.gameid DESC LIMIT 1)"),
            'bot_champion'
          ],
          [
            sequelize.literal("(SELECT champion FROM cblol AS c WHERE c.position = 'sup' AND c.datahora = Cblol.datahora AND c.teamname = Cblol.teamname ORDER BY c.gameid DESC LIMIT 1)"),
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

      return getIndexData;
    } catch (error) {
      throw new Error(`Erro ao buscar os dados. ${error.message}`);
    }
  }

  // static async getTeamInfo(id) {
  //   try {
  //     const TeamInfo = await Tournament.findByPk(id);

  //     if (!TeamInfo) {
  //       throw new Error(`Tournament com id ${id} não encontrado.`);
  //     }

  //     return TeamInfo;
  //   } catch (error) {
  //     throw new Error(`Erro ao encontrar o Tournament. ${error.message}`);
  //   }
  // }

}

module.exports = TournamentService;
