import initialState from '../collection-initial-state';
import { PATIENTS_FETCH, PATIENTS_FETCHED } from '../../action-types';

export default (state = initialState, action) => {
    switch (action.type) {
        case PATIENTS_FETCH:
            return state;

        case PATIENTS_FETCHED:
            return action.state;

        default:
            return state;
    }
};
