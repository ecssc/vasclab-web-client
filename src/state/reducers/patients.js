import { PATIENTS_FETCH, PATIENTS_FETCHED } from '../action-types';

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
        case PATIENTS_FETCHED:
        case PATIENTS_FETCH:
            return {
                ...state,
                ...newState.patients,
            };

        default:
            return state;
    }
};
