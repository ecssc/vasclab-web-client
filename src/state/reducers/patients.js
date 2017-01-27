import { PATIENTS_FETCH, PATIENTS_FETCHED } from '../action-types';

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
        case PATIENTS_FETCH:
            return state;

        case PATIENTS_FETCHED:
            return action.state;

        default:
            return state;
    }
};
