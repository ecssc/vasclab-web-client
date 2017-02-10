import { call, takeEvery } from 'redux-saga/effects';
import { browserHistory } from 'react-router';
import { USER_AUTH_LOGOUT } from '../action-types';
import { clear } from '../../helpers/local-storage';

/**
 * Flushes local storage in order to log the user out.
 */
export function* userAuthLogout() {
    yield call(clear);

    yield call(browserHistory.push, '/sign-in');
}

/**
 * Watches for user auth logout action..
 */
export function* watchUserAuthLogout() {
    yield takeEvery(USER_AUTH_LOGOUT, userAuthLogout);
}
