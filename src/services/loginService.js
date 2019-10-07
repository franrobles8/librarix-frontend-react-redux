import axios from 'axios';

import Cookies from 'universal-cookie';

const cookies = new Cookies();

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

export function checkValidToken(token) {

    const result = new Promise((resolve, reject) => {
        axios.post(`${BASE_URL}/users/checkValidToken`, {
            token: cookies.get('token')
        })
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    });

    // result.then((res) => console.log(res)).catch(err => console.log(err.message));

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