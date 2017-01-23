import reducer from './patients';
import initialSate from './initial-state';
import { PATIENTS_FETCH, PATIENTS_FETCHED } from '../../action-types';

describe('Patients Reducer', () => {

    it('should return the initial state', () => {
        expect(reducer(initialSate, { type: 'default' })).toEqual(initialSate);
    });

    it('should handle PATIENTS_FETCH', () => {
        expect(reducer(initialSate, { type: PATIENTS_FETCH })).toEqual(initialSate);
    });

    it('should handle PATIENTS_FETCHED', () => {
        const newSate = {
            ...initialSate,
            data: [{ foo: 'bar' }, { foo: 'baz' }],
        };

        expect(reducer(initialSate, {
            type: PATIENTS_FETCHED,
            state: newSate,
        })).toEqual(newSate);
    });

});
