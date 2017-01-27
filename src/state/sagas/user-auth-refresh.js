import { takeEvery } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import { auth } from '../../api/client';
import { START_HTTP, USER_AUTH_REFRESH, USER_AUTH_CHECK, USER_AUTH_LOGOUT, COMPLETE_HTTP } from '../action-types';

/**
 * Attempts to refresh a user's access token via the api.
 */
export function* userAuthRefresh() {
    try {
        yield put({ type: START_HTTP });

        yield call(auth.refreshToken);

        yield put({ type: USER_AUTH_CHECK });
    } catch (error) {
        yield put({ type: USER_AUTH_LOGOUT });
    } finally {
        yield put({ type: COMPLETE_HTTP });
    }
}

/**
 * Watches for user auth refresh state change.
 */
export function* watchUserAuthRefresh() {
    yield* takeEvery(USER_AUTH_REFRESH, userAuthRefresh);
}
