import { initialState, reducer } from '../reports';

import {
    ORG_REPORTS_FETCH,
    ORG_REPORTS_FETCHED,
    PATIENT_REPORTS_FETCH,
    PATIENT_REPORTS_FETCHED
} from '../../action-types';

describe('Reports Reducer', () => {

    it('should return the initial state', () => {
        expect(reducer(initialState, { type: 'default' })).toEqual(initialState);
    });

    it('should handle ORG_REPORTS_FETCH', () => {
        expect(reducer(initialState, { type: ORG_REPORTS_FETCH })).toEqual(initialState);
    });

    it('should handle ORG_REPORTS_FETCHED', () => {
        const newSate = {
            ...initialState,
            data: [{ foo: 'bar' }, { foo: 'baz' }],
        };

        expect(reducer(initialState, {
            type: ORG_REPORTS_FETCHED,
            state: newSate,
        })).toEqual(newSate);
    });

    it('should handle PATIENT_REPORTS_FETCH', () => {
        expect(reducer(initialState, { type: PATIENT_REPORTS_FETCH })).toEqual(initialState);
    });

    it('should handle PATIENT_REPORTS_FETCHED', () => {
        const newSate = {
            ...initialState,
            data: [{ foo: 'bar' }, { foo: 'baz' }],
        };

        expect(reducer(initialState, {
            type: PATIENT_REPORTS_FETCHED,
            state: newSate,
        })).toEqual(newSate);
    });

});
