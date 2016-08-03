import { combineReducers } from 'redux';

import patient  from './reducers/patient';
import patients from './reducers/patients';
import ui       from './reducers/ui';
import user     from './reducers/user';

export default combineReducers({
    patient,
    patients,
    ui,
    user
});

