import axios from "axios";

export default axios.create({
    baseURL: 'http://localhost:3300/api/v1',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}); 
