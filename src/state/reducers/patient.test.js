import reducer from './patient';
import { PATIENT_FETCH, PATIENT_FETCHED } from '../action-types';

describe('Patient Reducer', () => {

    it('should return the initial state', () => {
        expect(reducer({
            foo: 'bar'
        }, {
            type: 'default'
        })).toEqual({
            foo: 'bar'
        });
    });

    it('should handle PATIENT_FETCH', () => {
        expect(reducer({
            foo: 'bar'
        }, {
            type: PATIENT_FETCH
        })).toEqual({
            foo: 'bar'
        });
    });

    it('should handle PATIENT_FETCHED', () => {
        expect(reducer({
            foo: 'bar'
        }, {
            type: PATIENT_FETCHED,
            state: {
                baz: 'foobar'
            }
        })).toEqual({
            baz: 'foobar'
        });
    });

});
