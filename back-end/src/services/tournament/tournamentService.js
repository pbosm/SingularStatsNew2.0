const Cblol = require('../../models/cblol/cblolModel');
const Lck = require('../../models/lck/lckModel');
const Lpl = require('../../models/lpl/lplModel');
const db = require('../../db/database');

class TournamentService {
    
    static async getTournament(split) {
        try {
            split = split ? {
                'LCK': 'Spring',
                'LPL': 'spring',
                'CBLOL': 'split 1'
            } : {
                'LCK': 'Summer',
                'LPL': 'summer',
                'CBLOL': 'split 2'
            };

            const leagues = [
                { league: 'CBLOL', model: Cblol, splitName: split['CBLOL'] },
                { league: 'LCK',   model: Lck,   splitName: split['LCK'] },
                { league: 'LPL',   model: Lpl,   splitName: split['LPL'] }
            ];

            const queries = leagues.map(async ({ league, model, splitName }) => {
                const result = await model.findAll({
                    attributes: [
                        'league',
                        'split',
                        [db.fn('sum', db.literal("result=1")), 'games'],
                        [
                            db.literal(`sum(duracaogame) / 2 / sum(result=1) / 60`),
                            'game_duration'
                        ],
                        [
                            db.literal(`sum(teamkills) / sum(result=1)`),
                            'average_kill'
                        ],
                        [
                            db.literal(`sum(result=1 and side='blue') / sum(result=1) * 100`),
                            'win_rate_blue'
                        ],
                        [
                            db.literal(`sum(result=1 and side='red') / sum(result=1) * 100`),
                            'win_rate_red'
                        ],
                        [
                            db.literal(`sum(dragons) / sum(result=1)`),
                            'average_dragons'
                        ],
                        [
                            db.literal(`sum(barons) / sum(result=1)`),
                            'average_barons'
                        ],
                    ],
                    where: {
                        split: splitName,
                        league: league,
                        position: 'team',
                    },
                    group: ['league'],
                });
                return result;
            });
            const result = await Promise.all(queries);

            return result.flat();
        } catch (error) {
            throw new Error(`Erro ao buscar os dados. ${error.message}`);
        }
    }
}

module.exports = TournamentService;
