import { USER_AUTH_SUCCESS, USER_AUTH_FAIL, USER_AUTH_LOGOUT } from '../action-types'

const initialState = null;

export default (state = initialState, { type, ...newState }) => {
    switch (type) {
        case USER_AUTH_SUCCESS:
            return newState.user;

        case USER_AUTH_LOGOUT:
        case USER_AUTH_FAIL:
            return null;
    }

    return state
}
