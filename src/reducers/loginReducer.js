import {
    LOADING,
    SUCCESS,
    ERROR,
    ERROR_DISMISS,
    SUCCESS_LOGOUT,
    SET_VALID_TOKEN
} from '../constants/loginConstants';

const initialState = {
    loading: false,
    user: JSON.parse(localStorage.getItem('user')) || {},
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
            localStorage.setItem('user', JSON.stringify(action.user));
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
            localStorage.clear();
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