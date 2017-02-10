import { initialState, reducer } from '../patient';
import { PATIENT_FETCH, PATIENT_FETCHED } from '../../action-types';

describe('Patient Reducer', () => {

    it('should return the initial state', () => {
        expect(reducer(initialState, { type: 'default' })).toEqual(initialState);
    });

    it('should handle PATIENT_FETCH', () => {
        expect(reducer(initialState, { type: PATIENT_FETCH })).toEqual(initialState);
    });

    it('should handle PATIENTS_FETCHED', () => {
        const newSate = {
            ...initialState,
            first_name: 'Edward',
            last_name: 'Coleridge Smith',
        };

        expect(reducer(initialState, {
            type: PATIENT_FETCHED,
            state: newSate,
        })).toEqual(newSate);
    });

});
