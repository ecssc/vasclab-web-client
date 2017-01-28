import { put, call, takeEvery } from 'redux-saga/effects';
import { user } from '../../api/client';
import { START_HTTP, USER_AUTH_CHECK, USER_AUTH_SUCCESS, USER_AUTH_REFRESH, COMPLETE_HTTP } from '../action-types';

/**
 * Checks to see whether or not the user has a valid access token.
 */
export function* userAuthCheck() {
    try {
        yield put({ type: START_HTTP });

        const me = yield call(user.me);

        yield put({ type: USER_AUTH_SUCCESS, state: { user: me } });
    } catch (error) {
        yield put({ type: USER_AUTH_REFRESH });
    } finally {
        yield put({ type: COMPLETE_HTTP });
    }
}

/**
 * Watches for user auth check state change.
 */
export function* watchUserAuthCheck() {
    yield* takeEvery(USER_AUTH_CHECK, userAuthCheck);
}
