import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';

import * as types from '../action-types';
import { user, auth } from '../../api/client';

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
};

/**
 * Checks to see whether or not the user has a valid access token.
 *
 * @param {*} action
 * @return {*}
 */
const checkForAuthenticatedUser = function* (action) {
    try {
        const me = yield user.me()
                             .then((response) => (response.body.data))
                             .catch((error) => {
                                 throw error;
                             });

        console.info(`User ${me.id} was authenticated.`);

        const organisations = yield user.organisations(me.id)
                                        .then((response) => (response.body.data))
                                        .catch((error) => {
                                            throw error;
                                        });

        let organisation = null;

        if (organisations.length > 0) {
            organisation = organisations[0];
            console.info(`Orgainisation ${organisation.id} was selected.`);
        }

        yield put({ type: types.USER_AUTH_SUCCESS, user: me, organisations, organisation });
    } catch (error) {
        console.warn('No access token available - attempting to use refresh token.');
        yield refreshAccessToken(action);
    }
};

/**
 * Attempts to refresh the current user's access token.
 *
 * @param {*} action
 */
const refreshAccessToken = function* (action) {
    try {
        yield auth.refreshToken().then((response) => (response.body))
                  .catch((error) => {
                      throw error;
                  });

        yield checkForAuthenticatedUser(action);
    } catch (error) {
        console.warn('No refresh token available - logging user out.');
        throw error;
    }
};

/**
 * Watches for user auth check state change.
 */
export default function* () {
    yield* takeEvery(types.USER_AUTH_CHECK, checkUserStatus);
}
