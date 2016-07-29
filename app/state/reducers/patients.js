import { PATIENTS_FETCH, PATIENTS_FETCHED } from '../action-types'

const initialState = [];

export default (state = initialState, { type, ...newState }) => {
    switch (type) {
        case PATIENTS_FETCH:
            return state;

        case PATIENTS_FETCHED:
            return newState.patients;
    }

    return state
}
