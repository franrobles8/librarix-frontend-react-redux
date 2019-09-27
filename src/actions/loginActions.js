import {
    LOADING,
    SUCCESS,
    ERROR,
    ERROR_DISMISS
} from '../constants/loginConstants';

export const login = () => {

    return (dispatch) => {
        dispatch(loginLoading());

        //Login action service
        const user = {
            email: "test@test.com",
            token: "1S23jkjashfs"
        };
        //setTimeout(()=>{dispatch(loginSuccessful(user));}, 2000);
        setTimeout(()=>{dispatch(loginError());}, 2000);
        setTimeout(()=>{dispatch(loginSuccessful(user));}, 2000);

    }



}

const loginLoading = () => {
    return {
        type: LOADING,
        loading: true
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