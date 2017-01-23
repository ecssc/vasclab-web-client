import initialState from '../collection-initial-state';
import { REPORTS_FETCH, REPORTS_FETCHED } from '../../action-types';

export default (state = initialState, action) => {
    switch (action.type) {
        case REPORTS_FETCH:
            return state;

        case REPORTS_FETCHED:
            return action.state;

        default:
            return state;
    }
};
