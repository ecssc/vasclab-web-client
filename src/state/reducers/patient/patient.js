import initialState from './initial-state';
import { PATIENT_FETCH, PATIENT_FETCHED } from '../../action-types';

export default (state = initialState, action) => {
    switch (action.type) {
        case PATIENT_FETCH:
            return state;

        case PATIENT_FETCHED:
            return action.state;

        default:
            return state;
    }
};