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
    organisations: [],
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_AUTH_SUCCESS:
            return {
                ...state,
                account: action.state.account,
                organisations: action.state.organisations || initialState.organisations,
            };

        case USER_AUTH_CHECK:
        case USER_AUTH_LOGOUT:
        case USER_AUTH_FAIL:
            return initialState;

        default:
            return state;
    }
};
