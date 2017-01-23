import reducer from './patient';
import initialSate from './initial-state';
import { PATIENT_FETCH, PATIENT_FETCHED } from '../../action-types';

describe('Patient Reducer', () => {

    it('should return the initial state', () => {
        expect(reducer(initialSate, { type: 'default' })).toEqual(initialSate);
    });

    it('should handle PATIENT_FETCH', () => {
        expect(reducer(initialSate, { type: PATIENT_FETCH })).toEqual(initialSate);
    });

    it('should handle PATIENTS_FETCHED', () => {
        const newSate = {
            ...initialSate,
            first_name: 'Edward',
            last_name: 'Coleridge Smith',
        };

        expect(reducer(initialSate, {
            type: PATIENT_FETCHED,
            state: newSate,
        })).toEqual(newSate);
    });

});
