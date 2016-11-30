import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';

import * as types from '../action-types';
import { auth } from '../../api/client';

/**
 * Attempts to refresh the current user's access token.
 *
 * @param {*} action
 */
const refreshAccessToken = function* () {
    try {
        yield auth.refreshToken()
            .then(response => response.body)
            .catch((error) => {
                throw error;
            });

        yield put({ type: types.USER_AUTH_CHECK });
    } catch (error) {
        throw error;
    }
};

/**
 * Attempts to refresh a user'ss access token via the api.
 *
 * @param {*} action
 */
const refreshUserStatus = function* () {
    yield put({ type: types.SHOW_PROGRESS_BAR });

    try {
        yield refreshAccessToken();
    } catch (error) {
        yield put({ type: types.USER_AUTH_LOGOUT });
    } finally {
        yield put({ type: types.HIDE_PROGRESS_BAR });
    }
};

/**
 * Watches for user auth refrsh state change.
 */
export default function* () {
    yield* takeEvery(types.USER_AUTH_REFRESH, refreshUserStatus);
}
