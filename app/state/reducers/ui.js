import * as actions from '../action-types'

const initialState = {
    ui: {
        progressBar: {
            visible: false,
        },
        formInputs: {
            disabled: false,
        },
        errorMessage: {
            visible: false,
            message: ''
        }
    }
}

export default (state = initialState.ui, { type, ...newState }) => {
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

        case actions.SHOW_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: {
                    visible: true,
                    message: newState.message
                }
            }
        case actions.HIDE_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: {
                    visible: false,
                    message: ''
                }
            }
    }

    return state
}
