import { put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import * as types from '../action-types';
import { auth, user } from '../../api/client';

/**
 * Watches for user login state change.
 */
export default function* () {
    yield* takeEvery(types.USER_AUTH_ATTEMPT, validateCredentials);
}

/**
 * Attempts to validate a user's credentials via the api.
 *
 * @param {*} action
 */
const validateCredentials = function* (action) {
    yield put({ type: types.SHOW_PROGRESS_BAR });
    yield put({ type: types.HIDE_ERROR_MESSAGE });
    yield put({ type: types.DISABLE_FORM_INPUTS });

    try {
        yield auth.accessToken(action.username, action.password).then((response) => {
            return response.body.response[0];
        }).catch((error) => {
            throw error;
        });

        let me = yield user.me().then((response) => {
            return response.body.data;
        }).catch((error) => {
            throw error;
        });
    } catch (error) {
        yield put({
            type: types.SHOW_ERROR_MESSAGE,
            message: 'We can\'t seem to sign you in - please check your username and password'
        });
    } finally {
        yield put({ type: types.HIDE_PROGRESS_BAR });
        yield put({ type: types.ENABLE_FORM_INPUTS });
    }
}
