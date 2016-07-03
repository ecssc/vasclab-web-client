import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';
import * as types from '../action-types';
import { user } from '../../api/client';

/**
 * Watches for user auth check state change.
 */
export default function* () {
    yield* takeEvery(types.USER_AUTH_CHECK, checkUserStatus);
}

/**
 * Attempts to validate a user's credentials via the api.
 *
 * @param {*} action
 */
const checkUserStatus = function* (action) {
    yield put({ type: types.SHOW_PROGRESS_BAR });

    try {
        let me = yield user.me().then((response) => {
            return response.body.data;
        }).catch((error) => {
            throw error;
        });

        yield put({ type: types.USER_AUTH_SUCCESS, user: me });
    } catch (error) {
        yield put({ type: types.USER_AUTH_LOGOUT });
    } finally {
        yield put({ type: types.HIDE_PROGRESS_BAR });
    }
}
