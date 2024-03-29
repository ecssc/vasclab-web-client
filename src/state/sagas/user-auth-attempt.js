import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';
import * as types from '../action-types';
import { auth } from '../../api/client';

/**
 * Attempts to validate a user's credentials via the api.
 *
 * @param {*} action
 */
const validateCredentials = function* (action) {
    yield put({ type: types.HIDE_SNACKBAR });
    yield put({ type: types.SHOW_PROGRESS_BAR });
    yield put({ type: types.DISABLE_FORM_INPUTS });

    try {
        yield auth.accessToken(action.username, action.password)
            .then(response => response.body.response[0])
            .catch((error) => {
                throw error;
            });

        yield put({ type: types.USER_AUTH_CHECK });
    } catch (error) {
        yield put({ type: types.USER_AUTH_FAIL });

        yield put({
            type: types.SHOW_SNACKBAR,
            message: 'We couldn\'t sign you in - please double check your username and password',
            action: 'Ok',
        });
    } finally {
        yield put({ type: types.HIDE_PROGRESS_BAR });
        yield put({ type: types.ENABLE_FORM_INPUTS });
    }
};

/**
 * Watches for user login state change.
 */
export default function* () {
    yield* takeEvery(types.USER_AUTH_ATTEMPT, validateCredentials);
}
