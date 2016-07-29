import { PATIENTS_FETCH, PATIENTS_FETCHED } from '../action-types'

const initialState = {
    pageNumber: 1,
    data: [],
    pagination: null
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
