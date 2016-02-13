import { USER_LOGIN, USER_LOGOUT } from '../action-types'

const initialState = {
    user: {
        id: null
    }
}

export default (state = initialState.user, { type }) => {
    switch (type) {
        case USER_LOGIN:
            return {
                ...state
            }
        case USER_LOGOUT:
            return {
                ...state
            }
    }

    return state
}
