import initialState from '../collection-initial-state';

import {
    ORG_REPORTS_FETCH,
    ORG_REPORTS_FETCHED,
    PATIENT_REPORTS_FETCH,
    PATIENT_REPORTS_FETCHED,
} from '../../action-types';

export default (state = initialState, action) => {
    switch (action.type) {
        case ORG_REPORTS_FETCH:
        case PATIENT_REPORTS_FETCH:
            return state;

        case ORG_REPORTS_FETCHED:
        case PATIENT_REPORTS_FETCHED:
            return action.state;

        default:
            return state;
    }
};
