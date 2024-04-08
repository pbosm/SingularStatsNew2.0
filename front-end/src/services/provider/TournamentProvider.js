import Api from "../Api";

class TournamentProvider {
    constructor() {
        // caso não utilize o extends Api e super(), poderá instanciar assim no construct
        this.api = new Api();
    }

    getLastGames() {
        return this.api.get(`/home`);
    }
}

export default TournamentProvider;
