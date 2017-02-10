import { put, call, apply, takeEvery } from 'redux-saga/effects';
import { auth } from '../../api/client';
import { set } from '../../helpers/local-storage';

import {
    START_HTTP,
    USER_AUTH_REFRESH,
    USER_AUTH_CHECK,
    USER_AUTH_LOGOUT,
    COMPLETE_HTTP,
} from '../action-types';

/**
 * Attempts to refresh a user's access token via the api.
 */
export function* userAuthRefresh() {
    try {
        yield put({ type: START_HTTP });

        const now = new Date();
        const response = yield apply(auth, auth.refreshToken);

        yield call(set, process.env.ACCESS_TOKEN_NAME, response.body.access_token);
        yield call(set, process.env.REFRESH_TOKEN_NAME, response.body.refresh_token);
        yield call(set, process.env.EXPIRE_TIME_NAME, new Date(now.getTime() + (response.body.expires_in * 1000)));

        yield put({ type: USER_AUTH_CHECK });
    } catch (error) {
        yield put({ type: USER_AUTH_LOGOUT });
    } finally {
        yield put({ type: COMPLETE_HTTP });
    }
}

/**
 * Watches for user auth refresh action.
 */
export function* watchUserAuthRefresh() {
    yield takeEvery(USER_AUTH_REFRESH, userAuthRefresh);
}
