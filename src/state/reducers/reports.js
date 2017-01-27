import {
    ORG_REPORTS_FETCH,
    ORG_REPORTS_FETCHED,
    PATIENT_REPORTS_FETCH,
    PATIENT_REPORTS_FETCHED,
} from '../action-types';

export const initialState = {
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

export const reducer = (state = initialState, action) => {
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
