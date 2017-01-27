import { PATIENT_FETCH, PATIENT_FETCHED } from '../action-types';

export const initialState = {
    data: {
        salutation: null,
        first_name: null,
        last_name: null,
        name: null,
        dob: null,
        telephone: null,
        address: {
            address_1: null,
            address_2: null,
            postal_town: null,
            postcode: null,
        },
        created_at: null,
        updated_at: null,
    },
    queryParams: null,
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case PATIENT_FETCH:
            return state;

        case PATIENT_FETCHED:
            return action.state;

        default:
            return state;
    }
};
