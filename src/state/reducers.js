import { combineReducers } from 'redux';

import patient from './reducers/patient';
import patients from './reducers/patients';
import reports from './reducers/reports';
import ui from './reducers/ui';
import user from './reducers/user';

export default combineReducers({
    patient,
    patients,
    reports,
    ui,
    user,
});

