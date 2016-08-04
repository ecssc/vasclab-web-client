import { PATIENT_FETCH, PATIENT_FETCHED } from '../action-types';

const initialState = {
    data: {
        salutation: null,
        first_name: null,
        last_name: null,
        dob: null,
        telephone: null,
        address: {
            address_1: null,
            address_2: null,
            postal_town: null,
            postcode: null,
        },
    },
    queryParams: null,
};

export default (state = initialState, { type, ...newState }) => {
    switch (type) {
        case PATIENT_FETCH:
            return state;

        case PATIENT_FETCHED:
            return newState.patient;

        default:
            return state;
    }
};
