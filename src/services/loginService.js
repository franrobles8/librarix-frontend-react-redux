import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

export function authenticate(username, password) {

    const result = new Promise((resolve, reject) => {
        axios.post(`${BASE_URL}/users/authenticate`, {
            username,
            password
        })
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    });

    return result;
}


// Delete this test function
export function test(user) {
    const headers = {
        Authorization: 'Bearer ' + user.token
    };

    const result = new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/users/`, { headers })
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    });

    return result;
}