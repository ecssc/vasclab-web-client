import reducer from './reports';
import initialSate from '../collection-initial-state';
import { REPORTS_FETCH, REPORTS_FETCHED } from '../../action-types';

describe('Reports Reducer', () => {

    it('should return the initial state', () => {
        expect(reducer(initialSate, { type: 'default' })).toEqual(initialSate);
    });

    it('should handle REPORTS_FETCH', () => {
        expect(reducer(initialSate, { type: REPORTS_FETCH })).toEqual(initialSate);
    });

    it('should handle REPORTS_FETCHED', () => {
        const newSate = {
            ...initialSate,
            data: [{ foo: 'bar' }, { foo: 'baz' }],
        };

        expect(reducer(initialSate, {
            type: REPORTS_FETCHED,
            state: newSate,
        })).toEqual(newSate);
    });

});
