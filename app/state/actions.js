import * as types from './action-types'

/**
 * Attempts to authenticate a user.
 *
 * @return {{type}}
 */
export const userAuthAttempt = (model) => {
    return {
        type: types.USER_AUTH_ATTEMPT,
        ...model
    }
}

/**
 * Hides the error message component.
 *
 * @return {{type}}
 */
export const hideErrorMessage = () => {
    return {
        type: types.HIDE_ERROR_MESSAGE
    }
}
