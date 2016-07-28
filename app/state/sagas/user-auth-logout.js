import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';
import { browserHistory } from 'react-router';
import { USER_AUTH_LOGOUT, SHOW_SNACKBAR } from '../action-types';
import { auth } from '../../api/client';

/**
 * Watches for user auth success state change.
 */
export default function* () {
    yield* takeEvery(USER_AUTH_LOGOUT, logUserout);
}

/**
 * Called when a user was logged out.
 *
 * @param {*} action
 */
const logUserout = function* (action) {
    try {
        yield auth.revokeToken();
        yield browserHistory.push('/login');
    } catch (error) {
        yield put({
            type: SHOW_SNACKBAR,
            message: 'We couldn\'t sign you out - please try again',
            action: 'Ok'
        });
    }
}
