const Cblol = require('../../models/cblolModel');
const sequelize = require('../../db/database');
const { Op } = require('sequelize');

class TournamentService {
    static async actionIndex() {
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
                  'teamname',
                  'league',
                  'split',
                ],
                limit: 10
            });

            return result;
        } catch (error) {
            throw new Error(`Erro ao buscar os dados. ${error.message}`);
        }
    }
}

module.exports = TournamentService;
