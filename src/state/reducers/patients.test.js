import reducer from './patients';
import { PATIENTS_FETCH, PATIENTS_FETCHED } from '../action-types';

describe('Patients Reducer', () => {

    it('should return the initial state', () => {
        expect(reducer({
            foo: 'bar'
        }, {
            type: 'default'
        })).toEqual({
            foo: 'bar'
        });
    });

    it('should handle PATIENTS_FETCH', () => {
        expect(reducer({
            foo: 'bar'
        }, {
            type: PATIENTS_FETCH
        })).toEqual({
            foo: 'bar'
        });
    });

    it('should handle PATIENTS_FETCHED', () => {
        expect(reducer({
            foo: 'bar'
        }, {
            type: PATIENTS_FETCHED,
            state: {
                baz: 'foobar'
            }
        })).toEqual({
            baz: 'foobar'
        });
    });

});
