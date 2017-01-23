import initialState from './initial-state';
import { USER_AUTH_CHECK, USER_AUTH_SUCCESS, USER_AUTH_FAIL, USER_AUTH_LOGOUT } from '../../action-types';

export default (state = initialState, action) => {
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
