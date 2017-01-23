import initialState from './initial-state';
import * as actions from '../../action-types';

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.START_HTTP:
            return {
                ...state,
                http: {
                    inProgress: true,
                },
            };

        case actions.COMPLETE_HTTP:
            return {
                ...state,
                http: {
                    inProgress: false,
                },
            };

        case actions.ENABLE_FORMS:
            return {
                ...state,
                forms: {
                    disabled: false,
                },
            };

        case actions.DISABLE_FORMS:
            return {
                ...state,
                forms: {
                    disabled: true,
                },
            };

        case actions.SHOW_SNACKBAR:
            return {
                ...state,
                snackbar: {
                    visible: true,
                    message: action.state.message,
                    action: action.state.action,
                    autoHideDuration: action.state.autoHideDuration || initialState.snackbar.autoHideDuration,
                },
            };

        case actions.HIDE_SNACKBAR:
            return {
                ...state,
                snackbar: initialState.snackbar,
            };

        default:
            return state;
    }
};
