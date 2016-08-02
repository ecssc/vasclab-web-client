import { PATIENTS_FETCH, PATIENTS_FETCHED } from '../action-types'

const initialState = {
    data: [],
    pageNumber: 1,
    pagination: null,
    queryParams: null
};

export default (state = initialState, { type, ...newState }) => {
    switch (type) {
        case PATIENTS_FETCH:
            return {
                ...state,
                ...newState.pageNumber
            };

        case PATIENTS_FETCHED:
            return newState.patients;
    }

    return state
}
