import { put, call } from 'redux-saga/effects';
import { userAuthAttempt } from '../user-auth-attempt';
import { auth } from '../../../api/client';

import {
    START_HTTP,
    COMPLETE_HTTP,
    SHOW_SNACKBAR,
    HIDE_SNACKBAR,
    ENABLE_FORMS,
    DISABLE_FORMS,
    USER_AUTH_CHECK,
    USER_AUTH_FAIL,
} from '../../action-types';

describe('User Auth Attempt Saga', () => {

    it('can successfully call the API', () => {
        const generator = userAuthAttempt({ username: 'ecs@edcs.me', password: 'password123' });

        expect(generator.next().value).toEqual(put({ type: START_HTTP }));
        expect(generator.next().value).toEqual(put({ type: HIDE_SNACKBAR }));
        expect(generator.next().value).toEqual(put({ type: DISABLE_FORMS }));
        expect(generator.next().value).toEqual(call(auth.accessToken, 'ecs@edcs.me', 'password123'));
        expect(generator.next().value).toEqual(put({ type: USER_AUTH_CHECK }));
        expect(generator.next().value).toEqual(put({ type: COMPLETE_HTTP }));
        expect(generator.next().value).toEqual(put({ type: ENABLE_FORMS }));
    });

    it('can handle an error when calling the API', () => {
        const generator = userAuthAttempt({ username: 'ecs@edcs.me', password: 'password123' });

        expect(generator.next().value).toEqual(put({ type: START_HTTP }));
        expect(generator.next().value).toEqual(put({ type: HIDE_SNACKBAR }));
        expect(generator.next().value).toEqual(put({ type: DISABLE_FORMS }));
        expect(generator.throw({}).value).toEqual(put({ type: USER_AUTH_FAIL }));

        expect(generator.next().value).toEqual(put({
            type: SHOW_SNACKBAR,
            state: {
                message: 'We couldn\'t sign you in - please double check your username and password',
                action: 'Ok'
            },
        }));
    });

});
