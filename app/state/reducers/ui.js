import * as actions from '../action-types'

const initialState = {
    progressBar: {
        visible: false,
    },
    formInputs: {
        disabled: false,
    },
    snackbar: {
        visible: false,
        message: '',
        action: null
    }
}

export default (state = initialState, { type, ...newState }) => {
    switch (type) {
        case actions.SHOW_PROGRESS_BAR:
            return {
                ...state,
                progressBar: {
                    visible: true
                }
            }
        case actions.HIDE_PROGRESS_BAR:
            return {
                ...state,
                progressBar: {
                    visible: false
                }
            }

        case actions.ENABLE_FORM_INPUTS:
            return {
                ...state,
                formInputs: {
                    disabled: false
                }
            }
        case actions.DISABLE_FORM_INPUTS:
            return {
                ...state,
                formInputs: {
                    disabled: true
                }
            }

        case actions.SHOW_SNACKBAR:
            return {
                ...state,
                snackbar: {
                    visible: true,
                    message: newState.message,
                    action: newState.action
                }
            }
        case actions.HIDE_SNACKBAR:
            return {
                ...state,
                snackbar: {
                    visible: false,
                    message: '',
                    action: null
                }
            }
    }

    return state
}
