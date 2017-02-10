import { apply, call, put, takeEvery } from 'redux-saga/effects';
import { set } from '../../helpers/local-storage';
import { auth } from '../../api/client';

import {
    START_HTTP,
    HIDE_SNACKBAR,
    DISABLE_FORMS,
    USER_AUTH_CHECK,
    USER_AUTH_FAIL,
    SHOW_SNACKBAR,
    COMPLETE_HTTP,
    ENABLE_FORMS,
    USER_AUTH_ATTEMPT,
} from '../action-types';

/**
 * Attempts to exchange user credentials for an access token via the api.
 *
 * @param {*} action
 */
export function* userAuthAttempt(action) {
    try {
        yield put({ type: START_HTTP });
        yield put({ type: HIDE_SNACKBAR });
        yield put({ type: DISABLE_FORMS });

        const now = new Date();
        const response = yield apply(auth, auth.accessToken, [action.model.username, action.model.password]);

        yield call(set, process.env.ACCESS_TOKEN_NAME, response.body.access_token);
        yield call(set, process.env.REFRESH_TOKEN_NAME, response.body.refresh_token);
        yield call(set, process.env.EXPIRE_TIME_NAME, new Date(now.getTime() + (response.body.expires_in * 1000)));

        yield put({ type: USER_AUTH_CHECK });
    } catch (error) {
        yield put({ type: USER_AUTH_FAIL });

        yield put({
            type: SHOW_SNACKBAR,
            state: {
                message: 'We couldn\'t sign you in - please double check your username and password',
                action: 'Ok',
            },
        });
    } finally {
        yield put({ type: COMPLETE_HTTP });
        yield put({ type: ENABLE_FORMS });
    }
}

/**
 * Watches for user login action.
 */
export function* watchUserAuthAttempt() {
    yield takeEvery(USER_AUTH_ATTEMPT, userAuthAttempt);
}
