const { DataTypes } = require('sequelize');
const db = require('../db/database');
const { Op } = require('sequelize');

const Cblol = db.define('Cblol', {
  gameid: {
    type: DataTypes.STRING(21),
    allowNull: true,
  },
  'COL 2': {
    type: DataTypes.STRING(16),
    allowNull: true,
  },
  'COL 3': {
    type: DataTypes.STRING(108),
    allowNull: true,
  },
  league: {
    type: DataTypes.STRING(23),
    allowNull: true,
  },
  year: {
    type: DataTypes.STRING(4),
    allowNull: true,
  },
  split: {
    type: DataTypes.STRING(7),
    allowNull: true,
  },
  playoffs: {
    type: DataTypes.STRING(8),
    allowNull: true,
  },
  datahora: {
    type: DataTypes.STRING(19),
    allowNull: true,
  },
  'COL 9': {
    type: DataTypes.STRING(4),
    allowNull: true,
  },
  'COL 10': {
    type: DataTypes.STRING(5),
    allowNull: true,
  },
  'COL 11': {
    type: DataTypes.STRING(13),
    allowNull: true,
  },
  side: {
    type: DataTypes.STRING(4),
    allowNull: true,
  },
  position: {
    type: DataTypes.STRING(8),
    allowNull: true,
  },
  playername: {
    type: DataTypes.STRING(16),
    allowNull: true,
  },
  'COL 15': {
    type: DataTypes.STRING(41),
    allowNull: true,
  },
  teamname: {
    type: DataTypes.STRING(39),
    allowNull: true,
    primaryKey: true,
  },
  'COL 17': {
    type: DataTypes.STRING(39),
    allowNull: true,
  },
  champion: {
    type: DataTypes.STRING(14),
    allowNull: true,
  },
  ban1: {
    type: DataTypes.STRING(14),
    allowNull: true,
  },
  ban2: {
    type: DataTypes.STRING(14),
    allowNull: true,
  },
  ban3: {
    type: DataTypes.STRING(14),
    allowNull: true,
  },
  ban4: {
    type: DataTypes.STRING(12),
    allowNull: true,
  },
  ban5: {
    type: DataTypes.STRING(14),
    allowNull: true,
  },
  duracaogame: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  result: {
    type: DataTypes.STRING(6),
    allowNull: true,
  },
  kills: {
    type: DataTypes.STRING(5),
    allowNull: true,
  },
  deaths: {
    type: DataTypes.STRING(6),
    allowNull: true,
  },
  assists: {
    type: DataTypes.STRING(7),
    allowNull: true,
  },
  teamkills: {
    type: DataTypes.STRING(9),
    allowNull: true,
  },
  teamdeaths: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  'COL 31': {
    type: DataTypes.STRING(11),
    allowNull: true,
  },
  'COL 32': {
    type: DataTypes.STRING(11),
    allowNull: true,
  },
  'COL 33': {
    type: DataTypes.STRING(11),
    allowNull: true,
  },
  'COL 34': {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  firstblood: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  firstbloodkill: {
    type: DataTypes.STRING(14),
    allowNull: true,
  },
  firstbloodassist: {
    type: DataTypes.STRING(16),
    allowNull: true,
  },
  'COL 38': {
    type: DataTypes.STRING(16),
    allowNull: true,
  },
  'COL 39': {
    type: DataTypes.STRING(8),
    allowNull: true,
  },
  'COL 40': {
    type: DataTypes.STRING(6),
    allowNull: true,
  },
  firstdragon: {
    type: DataTypes.STRING(11),
    allowNull: true,
  },
  dragons: {
    type: DataTypes.STRING(7),
    allowNull: true,
  },
  'COL 43': {
    type: DataTypes.STRING(11),
    allowNull: true,
  },
  'COL 44': {
    type: DataTypes.STRING(15),
    allowNull: true,
  },
  'COL 45': {
    type: DataTypes.STRING(19),
    allowNull: true,
  },
  'COL 46': {
    type: DataTypes.STRING(9),
    allowNull: true,
  },
  'COL 47': {
    type: DataTypes.STRING(9),
    allowNull: true,
  },
  'COL 48': {
    type: DataTypes.STRING(6),
    allowNull: true,
  },
  'COL 49': {
    type: DataTypes.STRING(6),
    allowNull: true,
  },
  'COL 50': {
    type: DataTypes.STRING(9),
    allowNull: true,
  },
  'COL 51': {
    type: DataTypes.STRING(8),
    allowNull: true,
  },
  'COL 52': {
    type: DataTypes.STRING(22),
    allowNull: true,
  },
  'COL 53': {
    type: DataTypes.STRING(6),
    allowNull: true,
  },
  'COL 54': {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  firstherald: {
    type: DataTypes.STRING(11),
    allowNull: true,
  },
  heralds: {
    type: DataTypes.STRING(7),
    allowNull: true,
  },
  'COL 57': {
    type: DataTypes.STRING(11),
    allowNull: true,
  },
  firstbaron: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  barons: {
    type: DataTypes.STRING(6),
    allowNull: true,
  },
  baronsenemy: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  firsttower: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  towers: {
    type: DataTypes.STRING(6),
    allowNull: true,
  },
  towersenemy: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  'COL 64': {
    type: DataTypes.STRING(13),
    allowNull: true,
  },
  'COL 65': {
    type: DataTypes.STRING(18),
    allowNull: true,
  },
  'COL 66': {
    type: DataTypes.STRING(12),
    allowNull: true,
  },
  'COL 67': {
    type: DataTypes.STRING(16),
    allowNull: true,
  },
  'COL 68': {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  'COL 69': {
    type: DataTypes.STRING(14),
    allowNull: true,
  },
  damagetochampions: {
    type: DataTypes.STRING(17),
    allowNull: true,
  },
  dpm: {
    type: DataTypes.STRING(9),
    allowNull: true,
  },
  damageshare: {
    type: DataTypes.STRING(11),
    allowNull: true,
  },
  'COL 73': {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  'COL 74': {
    type: DataTypes.STRING(24),
    allowNull: true,
  },
  wardsplaced: {
    type: DataTypes.STRING(11),
    allowNull: true,
  },
  wpm: {
    type: DataTypes.STRING(6),
    allowNull: true,
  },
  'COL 77': {
    type: DataTypes.STRING(11),
    allowNull: true,
  },
  'COL 78': {
    type: DataTypes.STRING(6),
    allowNull: true,
  },
  'COL 79': {
    type: DataTypes.STRING(18),
    allowNull: true,
  },
  visionscore: {
    type: DataTypes.STRING(11),
    allowNull: true,
  },
  vspm: {
    type: DataTypes.STRING(7),
    allowNull: true,
  },
  totalgold: {
    type: DataTypes.STRING(9),
    allowNull: true,
  },
  earnedgold: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  earnedgpm: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  earnedgoldshare: {
    type: DataTypes.STRING(15),
    allowNull: true,
  },
  'COL 86': {
    type: DataTypes.STRING(9),
    allowNull: true,
  },
  'COL 87': {
    type: DataTypes.STRING(12),
    allowNull: true,
  },
  'total cs': {
    type: DataTypes.STRING(8),
    allowNull: true,
  },
  'COL 89': {
    type: DataTypes.STRING(11),
    allowNull: true,
  },
  'COL 90': {
    type: DataTypes.STRING(12),
    allowNull: true,
  },
  'COL 91': {
    type: DataTypes.STRING(21),
    allowNull: true,
  },
  'COL 92': {
    type: DataTypes.STRING(23),
    allowNull: true,
  },
  cspm: {
    type: DataTypes.STRING(7),
    allowNull: true,
  },
  'COL 94': {
    type: DataTypes.STRING(8),
    allowNull: true,
  },
  'COL 95': {
    type: DataTypes.STRING(6),
    allowNull: true,
  },
  'COL 96': {
    type: DataTypes.STRING(6),
    allowNull: true,
  },
  'COL 97': {
    type: DataTypes.STRING(12),
    allowNull: true,
  },
  'COL 98': {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  'COL 99': {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  'COL 100': {
    type: DataTypes.STRING(12),
    allowNull: true,
  },
  'COL 101': {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  'COL 102': {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  'COL 103': {
    type: DataTypes.STRING(9),
    allowNull: true,
  },
  'COL 104': {
    type: DataTypes.STRING(11),
    allowNull: true,
  },
  'COL 105': {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  'COL 106': {
    type: DataTypes.STRING(13),
    allowNull: true,
  },
  'COL 107': {
    type: DataTypes.STRING(15),
    allowNull: true,
  },
  'COL 108': {
    type: DataTypes.STRING(14),
    allowNull: true,
  },
  'COL 109': {
    type: DataTypes.STRING(8),
    allowNull: true,
  },
  'COL 110': {
    type: DataTypes.STRING(6),
    allowNull: true,
  },
  'COL 111': {
    type: DataTypes.STRING(6),
    allowNull: true,
  },
  'COL 112': {
    type: DataTypes.STRING(12),
    allowNull: true,
  },
  'COL 113': {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  'COL 114': {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  golddiffat15: {
    type: DataTypes.STRING(12),
    allowNull: true,
  },
  xpdiffat15: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  csdiffat15: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  'COL 118': {
    type: DataTypes.STRING(9),
    allowNull: true,
  },
  'COL 119': {
    type: DataTypes.STRING(11),
    allowNull: true,
  },
  'COL 120': {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  'COL 121': {
    type: DataTypes.STRING(13),
    allowNull: true,
  },
  'COL 122': {
    type: DataTypes.STRING(15),
    allowNull: true,
  },
  'COL 123': {
    type: DataTypes.STRING(14),
    allowNull: true,
  },
}, {
  tableName: 'cblol', // O nome da tabela no banco de dados
  timestamps: false, // Remove o recurso de timestamps automáticos
});

Cblol.searchTeam = async function (teamname, split) {
  try {
    const result = await this.findAll({
      attributes: [
        'teamname',
        [db.fn('count', db.col('teamname')), 'games'],
        [
          db.literal(`SUM(duracaogame) / COUNT(teamname) / 60`),
          'average_duration'
        ],
        [db.fn('sum', db.literal("side='Blue'")), 'total_blue_side'],
        [
          db.literal(`SUM(result=1 and side='Blue') / SUM(side='blue') * 100`),
          'winratio_blue'
        ],
        [db.fn('sum', db.literal("side='Red'")), 'total_red_side'],
        [
          db.literal(`SUM(result=1 and side='Red') / SUM(side='red') * 100`),
          'win_rate_red'
        ],
        [
          db.literal(`SUM(result=1) / COUNT(teamname) * 100`),
          'win_rate_total'
        ],
        [
          db.literal(`SUM(firsttower) / COUNT(teamname) * 100`),
          'first_tower_rate'
        ],
        [
          db.literal(`SUM(firsttower=1 and side='Blue') / SUM(side='blue') * 100`),
          'first_tower_rate_blue'
        ],
        [
          db.literal(`SUM(firsttower=1 and side='Red') / SUM(side='red') * 100`),
          'first_tower_rate_red'
        ],
        [
          db.literal(`SUM(firstblood) / COUNT(teamname) * 100`),
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

    return result;
  } catch (error) {
    throw new Error(`Erro ao buscar os dados. ${error.message}`);
  }
};

module.exports = Cblol;