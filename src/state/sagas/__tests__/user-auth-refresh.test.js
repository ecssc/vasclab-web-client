import { put, call } from 'redux-saga/effects';
import { auth } from '../../../api/client';
import { userAuthRefresh } from '../user-auth-refresh';
import { START_HTTP, USER_AUTH_CHECK, USER_AUTH_LOGOUT, COMPLETE_HTTP } from '../../action-types';

describe('User Auth Refresh Saga', () => {

    it('can successfully call the API', () => {
        const generator = userAuthRefresh();

        expect(generator.next().value).toEqual(put({ type: START_HTTP }));
        expect(generator.next().value).toEqual(call(auth.refreshToken));
        expect(generator.next().value).toEqual(put({ type: USER_AUTH_CHECK }));
        expect(generator.next().value).toEqual(put({ type: COMPLETE_HTTP }));
    });

    it('can handle an error when calling the API', () => {
        const generator = userAuthRefresh();

        expect(generator.next().value).toEqual(put({ type: START_HTTP }));
        expect(generator.next().value).toEqual(call(auth.refreshToken));
        expect(generator.throw({}).value).toEqual(put({ type: USER_AUTH_LOGOUT }));
        expect(generator.next().value).toEqual(put({ type: COMPLETE_HTTP }));
    });

});
