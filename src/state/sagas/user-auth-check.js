import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';

import * as types from '../action-types';
import { user } from '../../api/client';

/**
 * Checks to see whether or not the user has a valid access token.
 *
 * @param {*} action
 * @return {*}
 */
const checkForAuthenticatedUser = function* () {
    try {
        const me = yield user.me()
            .then(response => response.body.data)
            .catch((error) => {
                throw error;
            });

        const organisations = yield user.organisations(me.id)
            .then(response => response.body.data)
            .catch((error) => {
                throw error;
            });

        let organisation = null;

        if (organisations.length > 0) {
            organisation = organisations[0];
        }

        yield put({ type: types.USER_AUTH_SUCCESS, user: me, organisations, organisation });
    } catch (error) {
        yield put({ type: types.USER_AUTH_REFRESH });
    }
};

/**
 * Attempts to authenticate a user via the api.
 *
 * @param {*} action
 */
const checkUserStatus = function* () {
    yield put({ type: types.SHOW_PROGRESS_BAR });

    try {
        yield checkForAuthenticatedUser();
    } catch (error) {
        yield put({ type: types.USER_AUTH_LOGOUT });
    } finally {
        yield put({ type: types.HIDE_PROGRESS_BAR });
    }
};

/**
 * Watches for user auth check state change.
 */
export default function* () {
    yield* takeEvery(types.USER_AUTH_CHECK, checkUserStatus);
}
