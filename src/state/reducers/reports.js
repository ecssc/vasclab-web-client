import { REPORTS_FETCH, REPORTS_FETCHED } from '../action-types';

const initialState = {
    data: [],
    pageNumber: 1,
    pagination: {
        count: 0,
        current_page: 0,
        total_pages: 0,
    },
    queryParams: {
        query: '',
    },
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
