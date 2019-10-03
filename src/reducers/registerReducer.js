import {
    LOADING,
    SUCCESS,
    ERROR,
    ERROR_DISMISS,
    REDIRECT_LOGIN,
    REMOVE_USER_REGISTER_DATA
} from '../constants/registerConstants';

const initialState = {
    loading: false,
    user: false,
    errorRegister: false,
    redirectLogin: false,
    registeredSuccessfully: false
};

export default function register(state = initialState, action = {}) {
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
                user: action.user,
                registeredSuccessfully: true
            };
        case ERROR:
            return {
                ...state,
                loading: action.loading,
                errorRegister: action.errorRegister
            };
        case ERROR_DISMISS:
            return {
                ...state,
                errorRegister: action.errorRegister,
                registeredSuccessfully: false
            };
        case REDIRECT_LOGIN:
            return {
                ...state,
                redirectLogin: action.redirectLogin
            };
        case REMOVE_USER_REGISTER_DATA:
            return {
                ...state,
                user: false,
                registeredSuccessfully: false
            };

        default:
            return state;
    }
}