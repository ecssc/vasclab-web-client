import { initialState, reducer } from '../patients';
import { PATIENTS_FETCH, PATIENTS_FETCHED } from '../../action-types';

describe('Patients Reducer', () => {

    it('should return the initial state', () => {
        expect(reducer(initialState, { type: 'default' })).toEqual(initialState);
    });

    it('should handle PATIENTS_FETCH', () => {
        expect(reducer(initialState, { type: PATIENTS_FETCH })).toEqual(initialState);
    });

    it('should handle PATIENTS_FETCHED', () => {
        const newSate = {
            ...initialState,
            data: {
                first_name: 'Edward',
                last_name: 'Coleridge Smith',
            },
        };

        expect(reducer(initialState, {
            type: PATIENTS_FETCHED,
            state: newSate,
        })).toEqual(newSate);
    });

});
