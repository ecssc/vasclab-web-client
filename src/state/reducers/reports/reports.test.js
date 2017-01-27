import reducer from './reports';
import initialSate from '../collection-initial-state';

import {
    ORG_REPORTS_FETCH,
    ORG_REPORTS_FETCHED,
    PATIENT_REPORTS_FETCH,
    PATIENT_REPORTS_FETCHED
} from '../../action-types';

describe('Reports Reducer', () => {

    it('should return the initial state', () => {
        expect(reducer(initialSate, { type: 'default' })).toEqual(initialSate);
    });

    it('should handle ORG_REPORTS_FETCH', () => {
        expect(reducer(initialSate, { type: ORG_REPORTS_FETCH })).toEqual(initialSate);
    });

    it('should handle ORG_REPORTS_FETCHED', () => {
        const newSate = {
            ...initialSate,
            data: [{ foo: 'bar' }, { foo: 'baz' }],
        };

        expect(reducer(initialSate, {
            type: ORG_REPORTS_FETCHED,
            state: newSate,
        })).toEqual(newSate);
    });

    it('should handle PATIENT_REPORTS_FETCH', () => {
        expect(reducer(initialSate, { type: PATIENT_REPORTS_FETCH })).toEqual(initialSate);
    });

    it('should handle PATIENT_REPORTS_FETCHED', () => {
        const newSate = {
            ...initialSate,
            data: [{ foo: 'bar' }, { foo: 'baz' }],
        };

        expect(reducer(initialSate, {
            type: PATIENT_REPORTS_FETCHED,
            state: newSate,
        })).toEqual(newSate);
    });

});
