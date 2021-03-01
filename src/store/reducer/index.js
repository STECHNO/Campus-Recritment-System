import { combineReducers } from 'redux';
import auth_reducer from './auth_reducer';
import app_reducer from './app_reducer';




export default rootReducer = combineReducers({
    aut: auth_reducer,
    app: app_reducer,
})