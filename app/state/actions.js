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
