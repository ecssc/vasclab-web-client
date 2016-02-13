import { SHOW_MAIN_NAV, HIDE_MAIN_NAV, TOGGLE_MAIN_NAV } from '../action-types'

const initialState = {
    ui: {
        mainNavVisible: false
    }
}

export default (state = initialState.ui, { type }) => {
    switch (type) {
        case SHOW_MAIN_NAV:
            return {
                ...state,
                mainNavVisible: true
            }
        case HIDE_MAIN_NAV:
            return {
                ...state,
                mainNavVisible: false
            }
        case TOGGLE_MAIN_NAV:
            return {
                ...state,
                mainNavVisible: ! state.mainNavVisible
            }
    }

    return state
}
