import { SHOW_MAIN_NAV, HIDE_MAIN_NAV } from './action-types'

export const showMainNav = () => {
    return {
        type: SHOW_MAIN_NAV
    }
}

export const hideMainNav = () => {
    return {
        type: HIDE_MAIN_NAV
    }
}
