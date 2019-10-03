import {
    LOADING,
    SUCCESS,
    ERROR,
    ERROR_DISMISS,
    SUCCESS_LOGOUT
} from '../constants/loginConstants';

import setAuthToken from '../utils/setAuthToken';

import * as API from '../services/loginService';

export const login = (username, password) => {

    return (dispatch) => {
        dispatch(loginLoading(true));

        try {
            const response = API.authenticate(username, password);
            response.then((res) => {
                setAuthToken({username: res.data.username, token: res.data.token});
                dispatch(loginSuccessful({username: res.data.username, token: res.data.token}));
                dispatch(loginLoading(false));
            }).catch((error) => {
                console.log(error.message);
                dispatch(loginLoading(false));
                dispatch(loginError());
            });
        } catch(error) {
            console.log(error.message);
            dispatch(loginLoading(false));
        }
    }
}

export const logout = () => {
    return (dispatch) => {
        // if there isn't any parameter, it will remove the token from headers
        setAuthToken();
        dispatch(logoutSucessful());
    }
}

const loginLoading = (isLoading) => {
    return {
        type: LOADING,
        loading: isLoading
    };
}

const loginSuccessful = (user) => {
    return {
        type: SUCCESS,
        loading: false,
        errorLogin: false,
        user: user
    };
}

const logoutSucessful = () => {
    return {
        type: SUCCESS_LOGOUT,
        user: {}
    };
}

const loginError = () => {
    return {
        type: ERROR,
        loading: false,
        errorLogin: true
    }
}

export const setErrorLoginFalse = () => {
    return {
        type: ERROR_DISMISS,
        errorLogin: false
    }
};