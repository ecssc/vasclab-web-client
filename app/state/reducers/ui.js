import {
    SHOW_MAIN_NAV,
    HIDE_MAIN_NAV,
    TOGGLE_MAIN_NAV,
    SHOW_PROGRESS_BAR,
    HIDE_PROGRESS_BAR,
    ENABLE_FORM_INPUTS,
    DISABLE_FORM_INPUTS
} from '../action-types'

const initialState = {
    ui: {
        mainNavVisible: false,
        progressBarVisible: false,
        formInputsDisabled: false
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
                mainNavVisible: !state.mainNavVisible
            }
        case SHOW_PROGRESS_BAR:
            return {
                ...state,
                progressBarVisible: true
            }
        case HIDE_PROGRESS_BAR:
            return {
                ...state,
                progressBarVisible: false
            }
        case ENABLE_FORM_INPUTS:
            return {
                ...state,
                formInputsDisabled: false
            }
        case DISABLE_FORM_INPUTS:
            return {
                ...state,
                formInputsDisabled: true
            }
    }

    return state
}
