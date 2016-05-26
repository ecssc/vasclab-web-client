import { USER_AUTH_SUCCESS, USER_AUTH_FAIL, USER_AUTH_LOGOUT } from '../action-types'

const initialState = {
    user: {
        id: null,
        email: null,
        name: null
    }
}

export default (state = initialState.user, { type }) => {
    switch (type) {
        case USER_AUTH_SUCCESS:
            return {
                ...state
            }
        case USER_AUTH_LOGOUT:
        case USER_AUTH_FAIL:
            return {
                id: null,
                email: null,
                name: null
            }
    }

    return state
}
