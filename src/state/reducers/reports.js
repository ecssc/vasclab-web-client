import { REPORTS_FETCH, REPORTS_FETCHED } from '../action-types';

const initialState = {
    data: [],
    pageNumber: 1,
    pagination: null,
    queryParams: null,
};

export default (state = initialState, { type, ...newState }) => {
    switch (type) {
        case REPORTS_FETCH:
            return {
                ...state,
                ...newState.pageNumber,
            };

        case REPORTS_FETCHED:
            return newState.reports;

        default:
            return state;
    }
};
