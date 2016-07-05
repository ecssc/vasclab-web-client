import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';
import * as types from '../action-types';
import { user, auth } from '../../api/client';

/**
 * Watches for user auth check state change.
 */
export default function* () {
    yield* takeEvery(types.USER_AUTH_CHECK, checkUserStatus);
}

/**
 * Attempts to authenticate a user via the api.
 *
 * @param {*} action
 */
const checkUserStatus = function* (action) {
    yield put({ type: types.SHOW_PROGRESS_BAR });

    try {
        yield checkForAuthenticatedUser(action);
    } catch (error) {
        yield put({ type: types.USER_AUTH_LOGOUT });
    } finally {
        yield put({ type: types.HIDE_PROGRESS_BAR });
    }
}

/**
 * Checks to see whether or not the user has a valid access token.
 *
 * @param {*} action
 * @return {*}
 */
const checkForAuthenticatedUser = function* (action) {
    try {
        let me = yield user.me().then((response) => {
            return response.body.data;
        }).catch((error) => {
            throw error;
        });

        console.info('User '+me.id+' was authenticated.');

        yield put({ type: types.USER_AUTH_SUCCESS, user: me });
    } catch (error) {
        console.warn('No access token available - attempting to use refresh token.');
        yield refreshAccessToken(action);
    }
}

/**
 * Attempts to refresh the current user's access token.
 *
 * @param {*} action
 */
const refreshAccessToken = function* (action) {
    try {
        yield auth.refreshToken().then((response) => {
            return response.body;
        }).catch((error) => {
            throw error;
        });

        yield checkForAuthenticatedUser(action);
    } catch (error) {
        console.warn('No refresh token available - logging user out.');
        throw error;
    }
}
