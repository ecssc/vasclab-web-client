import { put, call } from 'redux-saga/effects';
import { userAuthCheck } from '../user-auth-check';
import { user } from '../../../api/client';

import {
    START_HTTP,
    COMPLETE_HTTP,
    USER_AUTH_SUCCESS,
    USER_AUTH_REFRESH,
} from '../../action-types';

describe('User Auth Check Saga', () => {

    it('can successfully call the API', () => {
        const generator = userAuthCheck();

        expect(generator.next().value).toEqual(put({ type: START_HTTP }));
        expect(generator.next().value).toEqual(call(user.me));

        expect(generator.next().value).toEqual(put({
            type: USER_AUTH_SUCCESS,
            state: { user: undefined },
        }));

        expect(generator.next().value).toEqual(put({ type: COMPLETE_HTTP }));
    });

    it('can handle an error when calling the API', () => {
        const generator = userAuthCheck();

        expect(generator.next().value).toEqual(put({ type: START_HTTP }));
        expect(generator.next().value).toEqual(call(user.me));
        expect(generator.throw({}).value).toEqual(put({ type: USER_AUTH_REFRESH }));
        expect(generator.next().value).toEqual(put({ type: COMPLETE_HTTP }));
    });

});
