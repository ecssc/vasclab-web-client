import { combineReducers } from 'redux';
import { reducer as patient } from './reducers/patient';
import { reducer as patients } from './reducers/patients';
import { reducer as reports } from './reducers/reports';
import { reducer as ui } from './reducers/ui';
import { reducer as user } from './reducers/user';

export default combineReducers({
    patient,
    patients,
    reports,
    ui,
    user,
});
