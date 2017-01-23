import reducer from './ui';
import initialSate from './initial-state';
import * as actions from '../../action-types';

describe('UI Reducer', () => {

    it('should return the initial state', () => {
        expect(reducer(initialSate, { type: 'default' })).toEqual(initialSate);
    });

    it('should handle START_HTTP', () => {
        expect(reducer(initialSate, { type: actions.START_HTTP })).toEqual({
            ...initialSate,
            http: {
                inProgress: true,
            }
        });
    });

    it('should handle COMPLETE_HTTP', () => {
        expect(reducer(initialSate, { type: actions.COMPLETE_HTTP })).toEqual({
            ...initialSate,
            http: {
                inProgress: false,
            }
        });
    });

    it('should handle ENABLE_FORMS', () => {
        expect(reducer(initialSate, { type: actions.ENABLE_FORMS })).toEqual({
            ...initialSate,
            forms: {
                disabled: false,
            }
        });
    });

    it('should handle DISABLE_FORMS', () => {
        expect(reducer(initialSate, { type: actions.DISABLE_FORMS })).toEqual({
            ...initialSate,
            forms: {
                disabled: true,
            }
        });
    });

    it('should handle SHOW_SNACKBAR', () => {
        expect(reducer(initialSate, {
            type: actions.SHOW_SNACKBAR,
            state: {
                message: 'Testing 123',
                action: 'this should be a function',
            },
        })).toEqual({
            ...initialSate,
            snackbar: {
                ...initialSate.snackbar,
                visible: true,
                message: 'Testing 123',
                action: 'this should be a function',
            }
        });
    });

    it('should handle HIDE_SNACKBAR', () => {
        expect(reducer(initialSate, {
            type: actions.HIDE_SNACKBAR,
        })).toEqual({
            ...initialSate,
        });
    });

});
