import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

export function register(user) {

    const result = new Promise((resolve, reject) => {
        axios.post(`${BASE_URL}/users/register`, {
            username: user.username,
            password: user.password,
            firstName: user.firstName,
            lastName: user.lastName
        })
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    });

    return result;
}