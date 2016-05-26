import * as types from './action-types'

/**
 * Makes the main nav component visible.
 *
 * @return {{type}}
 */
export const showMainNav = () => {
    return {
        type: types.SHOW_MAIN_NAV
    }
}

/**
 * Hides the main nav component.
 *
 * @return {{type}}
 */
export const hideMainNav = () => {
    return {
        type: types.HIDE_MAIN_NAV
    }
}

/**
 * Toggles the main nav components visiblity.
 *
 * @return {{type}}
 */
export const toggleMainNav = () => {
    return {
        type: types.TOGGLE_MAIN_NAV
    }
}

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
 * Authentication has failed for the user.
 *
 * @return {{type}}
 */
export const userAuthFail = () => {
    return {
        type: types.USER_AUTH_FAIL
    }
}

/**
 * The user was successfully authenticated.
 *
 * @return {{type}}
 */
export const userAuthSuccess = () => {
    return {
        type: types.USER_AUTH_SUCCESS
    }
}


/**
 * Destroys the currently authenticated user's session.
 *
 * @return {{type}}
 */
export const userAuthLogout = () => {
    return {
        type: types.USER_AUTH_LOGOUT
    }
}
