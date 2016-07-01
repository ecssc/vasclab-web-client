import { USER_AUTH_SUCCESS, USER_AUTH_FAIL, USER_AUTH_LOGOUT } from '../action-types'

const initialState = {
    user: null
}

export default (state = initialState.user, { type, ...newState }) => {
    switch (type) {
        case USER_AUTH_SUCCESS:
            return {
                ...state,
                user: newState.user
            }
        case USER_AUTH_LOGOUT:
        case USER_AUTH_FAIL:
            return {
                ...state,
                user: null
            }
    }

    return state
}
