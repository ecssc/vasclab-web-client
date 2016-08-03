import { PATIENT_FETCH, PATIENT_FETCHED } from '../action-types'

const initialState = {
    data: [],
    queryParams: null
};

export default (state = initialState, { type, ...newState }) => {
    switch (type) {
        case PATIENT_FETCH:
            return state;

        case PATIENT_FETCHED:
            return newState.patient;
    }

    return state
}
