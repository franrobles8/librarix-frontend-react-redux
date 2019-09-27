import {
    LOADING,
    SUCCESS,
    ERROR,
    ERROR_DISMISS
} from '../constants/loginConstants';

const initialState = {
    loading: false,
    user: false,
    errorLogin: false
};

export default function login(state = initialState, action = {}) {
    switch (action.type) {

        case LOADING:
            return {
                ...state,
                loading: action.loading
            };
        case SUCCESS:
            return {
                ...state,
                loading: action.loading,
                user: action.user
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

        default:
            return state;
    }
}