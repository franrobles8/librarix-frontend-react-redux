import {
    LOADING,
    SUCCESS,
    ERROR,
    ERROR_DISMISS,
    SUCCESS_LOGOUT,
    SET_VALID_TOKEN
} from '../constants/loginConstants';

//import setAuthToken from '../utils/setAuthToken';

import * as API from '../services/loginService';

export const login = (username, password) => {

    return (dispatch) => {
        dispatch(loginLoading(true));

        try {
            const response = API.authenticate(username, password);
            response.then((res) => {
                //setAuthToken(res.data.token);
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
        //setAuthToken();
        dispatch(logoutSucessful());
    }
}

export const checkValidToken = (token) => {
    return (dispatch) => {
        API.checkValidToken(token)
            .then((res) => {
                if(res.data.validToken) {
                    dispatch(setValidToken(res.data.validToken));
                } else {
                    dispatch(setValidToken(false));
                    console.log(res.data.message);
                }
            })
            .catch(err => console.log(err));
    }
}

const setValidToken = (validToken) => {
    return {
        type: SET_VALID_TOKEN,
        validToken
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