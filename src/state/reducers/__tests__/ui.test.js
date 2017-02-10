import { initialState, reducer } from '../ui';
import * as actions from '../../action-types';

describe('UI Reducer', () => {

    it('should return the initial state', () => {
        expect(reducer(initialState, { type: 'default' })).toEqual(initialState);
    });

    it('should handle START_HTTP', () => {
        expect(reducer(initialState, { type: actions.START_HTTP })).toEqual({
            ...initialState,
            http: {
                inProgress: true,
            }
        });
    });

    it('should handle COMPLETE_HTTP', () => {
        expect(reducer(initialState, { type: actions.COMPLETE_HTTP })).toEqual({
            ...initialState,
            http: {
                inProgress: false,
            }
        });
    });

    it('should handle ENABLE_FORMS', () => {
        expect(reducer(initialState, { type: actions.ENABLE_FORMS })).toEqual({
            ...initialState,
            forms: {
                disabled: false,
            }
        });
    });

    it('should handle DISABLE_FORMS', () => {
        expect(reducer(initialState, { type: actions.DISABLE_FORMS })).toEqual({
            ...initialState,
            forms: {
                disabled: true,
            }
        });
    });

    it('should handle SHOW_SNACKBAR', () => {
        expect(reducer(initialState, {
            type: actions.SHOW_SNACKBAR,
            state: {
                message: 'Testing 123',
                action: 'this should be a function',
            },
        })).toEqual({
            ...initialState,
            snackbar: {
                ...initialState.snackbar,
                visible: true,
                message: 'Testing 123',
                action: 'this should be a function',
            }
        });
    });

    it('should handle HIDE_SNACKBAR', () => {
        expect(reducer(initialState, {
            type: actions.HIDE_SNACKBAR,
        })).toEqual({
            ...initialState,
        });
    });

});
