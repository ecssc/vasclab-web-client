import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { responsiveStateReducer } from 'redux-responsive';

import patients from './reducers/patients';
import ui from './reducers/ui';
import user from './reducers/user';

export default combineReducers({
    patients,
    ui,
    user,
    routing: routerReducer,
    browser: responsiveStateReducer,
});

