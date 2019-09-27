import { combineReducers } from 'redux';
import users from './usersReducer';
import login from './loginReducer';

const rootReducer =  combineReducers({
    login: login,
    users: users
});

export default rootReducer;