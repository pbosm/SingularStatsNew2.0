const cblol = require('../../models/cblolModel');
const sequelize = require('../../db/database');
const { Op } = require('sequelize');
const moment = require('moment');

class TournamentStatsService {

  static async actionIndex() {
    try {
      const result = await cblol.findAll({
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

      for (const game of result) {
        game.result = game.result === 1 ? 'Vitória' : 'Derrota';
        game.datahora = moment(game.datahora).format('DD/MM/YYYY');
      }

      return result;
    } catch (error) {
      throw new Error(`Erro ao buscar os dados. ${error.message}`);
    }
  }

  static async search(teamname, split) {
    try {
      const resultSearch = await cblol.findAll({
        attributes: [
          'teamname',
          [sequelize.fn('count', sequelize.col('teamname')), 'games'],
          [
            sequelize.literal(`SUM(duracaogame) / COUNT(teamname) / 60`),
            'average_duration'
          ],
          [sequelize.fn('sum', sequelize.literal("side='Blue'")), 'total_blue_side'],
          [
            sequelize.literal(`SUM(result=1 and side='Blue') / SUM(side='blue') * 100`),
            'winratio_blue'
          ],
          [sequelize.fn('sum', sequelize.literal("side='Red'")), 'total_red_side'],
          [
            sequelize.literal(`SUM(result=1 and side='Red') / SUM(side='red') * 100`),
            'win_rate_red'
          ],
          [
            sequelize.literal(`SUM(result=1) / COUNT(teamname) * 100`),
            'win_rate_total'
          ],
          [
            sequelize.literal(`SUM(firsttower) / COUNT(teamname) * 100`),
            'first_tower_rate'
          ],
          [
            sequelize.literal(`SUM(firsttower=1 and side='Blue') / SUM(side='blue') * 100`),
            'first_tower_rate_blue'
          ],
          [
            sequelize.literal(`SUM(firsttower=1 and side='Red') / SUM(side='red') * 100`),
            'first_tower_rate_red'
          ],
          [
            sequelize.literal(`SUM(firstblood) / COUNT(teamname) * 100`),
            'first_blood_rate'
          ],
        ],
        where: {
          teamname: {
            [Op.like]: `%${teamname}%`
          },
          split: split,
          position: 'team',
        },
        group: ['teamname'],
      });

      return resultSearch;
    } catch (error) {
      throw new Error(`Erro ao buscar os dados. ${error.message}`);
    }
  }

}

module.exports = TournamentStatsService;
