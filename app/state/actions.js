import * as types from './action-types'

export const showMainNav = () => {
    return {
        type: types.SHOW_MAIN_NAV
    }
}

export const hideMainNav = () => {
    return {
        type: types.HIDE_MAIN_NAV
    }
}

export const toggleMainNav = () => {
    return {
        type: types.TOGGLE_MAIN_NAV
    }
}

export const showNavButton = () => {
    return {
        type: types.SHOW_NAV_BUTTON
    }
}

export const hideNavButton = () => {
    return {
        type: types.HIDE_NAV_BUTTON
    }
}
