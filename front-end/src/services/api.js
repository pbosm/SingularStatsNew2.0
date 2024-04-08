import axios from 'axios';

class Api {
    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost:3300/api/v1',
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    get(url, params = {}) {
        return this.api.get(url, { params });
    }

    post(url, data = {}) {
        return this.api.post(url, data);
    }

    put(url, data = {}) {
        return this.api.put(url, data);
    }

    delete(url, data = {}) {
        return this.api.delete(url, data);
    }
}

export default Api;
