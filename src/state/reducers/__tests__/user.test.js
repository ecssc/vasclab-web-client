import { initialState, reducer } from '../user';
import { USER_AUTH_CHECK, USER_AUTH_SUCCESS, USER_AUTH_FAIL, USER_AUTH_LOGOUT } from '../../action-types';

describe('User Reducer', () => {

    it('should return the initial state', () => {
        expect(reducer(initialState, { type: 'default' })).toEqual(initialState);
    });

    it('should handle USER_AUTH_CHECK', () => {
        expect(reducer(initialState, { type: USER_AUTH_CHECK })).toEqual(initialState);
    });

    it('should handle USER_AUTH_FAIL', () => {
        expect(reducer(initialState, { type: USER_AUTH_FAIL })).toEqual(initialState);
    });

    it('should handle USER_AUTH_LOGOUT', () => {
        expect(reducer(initialState, { type: USER_AUTH_LOGOUT })).toEqual(initialState);
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

        expect(reducer(initialState, {
            type: USER_AUTH_SUCCESS,
            state: newState
        })).toEqual({
            ...initialState,
            ...newState
        });
    });

});
