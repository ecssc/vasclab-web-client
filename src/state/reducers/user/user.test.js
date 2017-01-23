import reducer from './user';
import initialSate from './initial-state';
import { USER_AUTH_CHECK, USER_AUTH_SUCCESS, USER_AUTH_FAIL, USER_AUTH_LOGOUT } from '../../action-types';

describe('User Reducer', () => {

    it('should return the initial state', () => {
        expect(reducer(initialSate, { type: 'default' })).toEqual(initialSate);
    });

    it('should handle USER_AUTH_CHECK', () => {
        expect(reducer(initialSate, { type: USER_AUTH_CHECK })).toEqual(initialSate);
    });

    it('should handle USER_AUTH_FAIL', () => {
        expect(reducer(initialSate, { type: USER_AUTH_FAIL })).toEqual(initialSate);
    });

    it('should handle USER_AUTH_LOGOUT', () => {
        expect(reducer(initialSate, { type: USER_AUTH_LOGOUT })).toEqual(initialSate);
    });

    it('should handle USER_AUTH_SUCCESS', () => {
        const newState = {
            account: { id: 1 },
            organisation: { id: 1 },
            organisations: [
                { id: 1 },
                { id: 2 },
                { id: 3 },
            ]
        };

        expect(reducer(initialSate, {
            type: USER_AUTH_SUCCESS,
            state: newState
        })).toEqual({
            ...initialSate,
            ...newState
        });
    });

});
