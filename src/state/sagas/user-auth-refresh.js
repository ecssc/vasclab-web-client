import { put, call, takeEvery } from 'redux-saga/effects';
import { auth } from '../../api/client';
import { START_HTTP, USER_AUTH_REFRESH, USER_AUTH_CHECK, USER_AUTH_LOGOUT, COMPLETE_HTTP } from '../action-types';

/**
 * Attempts to refresh a user's access token via the api.
 */
export function* userAuthRefresh() {
    try {
        console.info('Attempting to refresh access token');

        yield put({ type: START_HTTP });

        yield call(auth.refreshToken);

        yield put({ type: USER_AUTH_CHECK });
    } catch (error) {
        console.warn('Failed to refresh access token');

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
