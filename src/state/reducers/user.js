import { USER_AUTH_CHECK, USER_AUTH_SUCCESS, USER_AUTH_FAIL, USER_AUTH_LOGOUT } from '../action-types';

export const initialState = {
    account: {
        id: null,
        salutation: null,
        first_name: null,
        last_name: null,
        name: null,
        avatar: null,
        last_login: null,
        activated_at: null,
    },
    organisation: {
        id: null,
        name: null,
        address: {
            business_name: null,
            address_1: null,
            address_2: null,
            postal_town: null,
            postcode: null,
            country: null,
        },
    },
    organisations: [],
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_AUTH_SUCCESS:
            return {
                ...state,
                account: action.state.account,
                organisation: action.state.organisation,
                organisations: action.state.organisations,
            };

        case USER_AUTH_CHECK:
        case USER_AUTH_LOGOUT:
        case USER_AUTH_FAIL:
            return initialState;

        default:
            return state;
    }
};
