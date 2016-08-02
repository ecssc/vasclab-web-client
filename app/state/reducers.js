import { combineReducers } from 'redux';

import patients from './reducers/patients';
import ui from './reducers/ui';
import user from './reducers/user';

export default combineReducers({
    patients,
    ui,
    user
});

