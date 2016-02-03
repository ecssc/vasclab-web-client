import { combineReducers } from 'redux'
import { routeReducer } from 'react-router-redux'
import * as types from './action-types'

const initialState = {
    ui: {
        showNavButton: false,
        mainNavVisible: true,
        mainNavDocked: true
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
    }

    return state
}

export default combineReducers({
    ui,
    routing: routeReducer
})

