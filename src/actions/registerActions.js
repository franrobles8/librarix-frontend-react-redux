import {
    LOADING,
    SUCCESS,
    ERROR,
    ERROR_DISMISS,
    REDIRECT_LOGIN,
    REMOVE_USER_REGISTER_DATA
} from '../constants/registerConstants';

import * as API from '../services/registerService';

export const register = (user) => {

    return (dispatch) => {
        dispatch(registerLoading(true));

        try {
            const response = API.register(user);
            response.then((res) => {
                dispatch(registerSuccessful(user));
                dispatch(registerLoading(false));
                setTimeout(() => {
                    dispatch(setRedirectLogin(true));
                }, 3000);

            }).catch((error) => {
                console.log(error.message);
                dispatch(registerLoading(false));
                dispatch(registerError());
            });
        } catch(error) {
            console.log(error.message);
            dispatch(registerLoading(false));
        }
    }
}

const registerLoading = (isLoading) => {
    return {
        type: LOADING,
        loading: isLoading
    };
}

const registerSuccessful = (user) => {
    return {
        type: SUCCESS,
        loading: false,
        errorRegister: false,
        user: user
    };
}

const registerError = () => {
    return {
        type: ERROR,
        loading: false,
        errorRegister: true
    }
}

export const setErrorRegisterFalse = () => {
    return {
        type: ERROR_DISMISS,
        errorRegister: false
    }
};

export const setRedirectLogin = (enabled) => {
    return {
        type: REDIRECT_LOGIN,
        redirectLogin: enabled
    }
};

export const removeRegisteredUserInfo = () => {
    return {
        type: REMOVE_USER_REGISTER_DATA
    }
}