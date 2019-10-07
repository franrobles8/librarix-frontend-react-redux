import {
    LOADING,
    SUCCESS,
    ERROR,
    ERROR_DISMISS,
    SUCCESS_LOGOUT,
    SET_VALID_TOKEN
} from '../constants/loginConstants';

import Cookies from 'universal-cookie';

const cookies = new Cookies();

const initialState = {
    loading: false,
    user: {
        username: cookies.get('username'),
        token: cookies.get('token')
        } || {},
    errorLogin: false,
    isValidToken: false
};

export default function login(state = initialState, action = {}) {
    switch (action.type) {

        case LOADING:
            return {
                ...state,
                loading: action.loading
            };
        case SUCCESS:
            cookies.set('token', action.user.token, {path: '/', maxAge: action.user.maxAge});
            cookies.set('username', action.user.username, {path: '/', maxAge: action.user.maxAge});
            return {
                ...state,
                loading: action.loading,
                user: action.user,
                isValidToken: true
            };
        case ERROR:
            return {
                ...state,
                loading: action.loading,
                errorLogin: action.errorLogin
            };
        case ERROR_DISMISS:
            return {
                ...state,
                errorLogin: action.errorLogin
            };
        case SUCCESS_LOGOUT:
            cookies.remove('token');
            cookies.remove('username');
            return {
                ...state,
                user: {},
                isValidToken: false
            };
        case SET_VALID_TOKEN:
            return {
                ...state,
                isValidToken: action.validToken
            }

        default:
            return state;
    }
}