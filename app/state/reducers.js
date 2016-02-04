import { combineReducers } from 'redux'
import { routeReducer } from 'react-router-redux'
import { responsiveStateReducer } from 'redux-responsive'
import * as types from './action-types'

const initialState = {
    ui: {
        navButtonVisible: true,
        mainNavVisible: false,
        mainNavDocked: false
    }
}

const ui = (state = initialState.ui, { type }) => {
    switch (type) {
        case types.SHOW_MAIN_NAV:
            return {
                ...state,
                mainNavVisible: true
            }
        case types.HIDE_MAIN_NAV:
            return {
                ...state,
                mainNavVisible: false
            }
        case types.TOGGLE_MAIN_NAV:
            return {
                ...state,
                mainNavVisible: !state.mainNavVisible
            }
        case types.SHOW_NAV_BUTTON:
            return {
                ...state,
                navButtonVisible: true
            }
        case types.HIDE_NAV_BUTTON:
            return {
                ...state,
                navButtonVisible: false
            }
    }

    return state
}

export default combineReducers({
    ui,
    routing: routeReducer,
    browser: responsiveStateReducer,
})

