import { apply, put, takeEvery } from 'redux-saga/effects';
import { user } from '../../api/client';
import { START_HTTP, USER_AUTH_CHECK, USER_AUTH_SUCCESS, USER_AUTH_REFRESH, COMPLETE_HTTP } from '../action-types';

/**
 * Checks to see whether or not the user has a valid access token.
 */
export function* userAuthCheck() {
    try {
        console.info('Attempting to load user and organisation');

        yield put({ type: START_HTTP });

        const me = yield apply(user, user.me);
        const organisations = yield apply(user, user.organisations, [me.body.data.id]);

        yield put({
            type: USER_AUTH_SUCCESS,
            redirect: true,
            state: {
                account: me.body.data,
                organisations: organisations.body.data,
            },
        });
    } catch (error) {
        console.warn('Failed to load user and organisation');

        yield put({ type: USER_AUTH_REFRESH });
    } finally {
        yield put({ type: COMPLETE_HTTP });
    }
}

/**
 * Watches for user auth check state change.
 */
export function* watchUserAuthCheck() {
    yield takeEvery(USER_AUTH_CHECK, userAuthCheck);
}
