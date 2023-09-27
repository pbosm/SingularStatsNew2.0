const Cblol = require('../../models/cblolModel');
// const Lck = require('../../models/lcklModel');
const db = require('../../db/database');
const { Op } = require('sequelize');

class TournamentService {
    
    static async actionIndex(split) {
        try {
            const split = true ? {
                'LCK': 'Spring',
                'LPL': 'spring',
                'CBLOL': 'split 1'
            } : {
                'LCK': 'Summer',
                'LPL': 'summer',
                'CBLOL': 'split 2'
            };

            const result = await Cblol.findAll({
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
                    split: split['CBLOL'],
                    league: 'CBLOL',
                    position: 'team',
                },
                group: ['league'],
            });

            // const resultLck = await LCK.findAll({
            //     attributes: [
            //         'league',
            //         'split',
            //         [db.fn('sum', db.literal("result=1")), 'games'],
            //         [
            //             db.literal(`sum(duracaogame) / 2 / sum(result=1) / 60`),
            //             'game_duration'
            //         ],
            //         [
            //             db.literal(`sum(teamkills) / sum(result=1)`),
            //             'average_kill'
            //         ],
            //         [
            //             db.literal(`sum(result=1 and side='blue') / sum(result=1) * 100`),
            //             'win_rate_blue'
            //         ],
            //         [
            //             db.literal(`sum(result=1 and side='red') / sum(result=1) * 100`),
            //             'win_rate_red'
            //         ],
            //         [
            //             db.literal(`sum(dragons) / sum(result=1)`),
            //             'average_dragons'
            //         ],
            //         [
            //             db.literal(`sum(barons) / sum(result=1)`),
            //             'average_barons'
            //         ],
            //     ],
            //     where: {
            //         split: split['LCK'],
            //         league: 'LCK',
            //         position: 'team',
            //     },
            //     group: ['league'],
            // });

            // const combinedResult = [...resultCblol, ...resultLck];

            return result;
        } catch (error) {
            throw new Error(`Erro ao buscar os dados. ${error.message}`);
        }
    }
}

module.exports = TournamentService;
