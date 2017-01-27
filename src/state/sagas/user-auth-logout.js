import lockr from 'lockr';
import { takeEvery } from 'redux-saga';
import { call } from 'redux-saga/effects';
import { browserHistory } from 'react-router';
import { USER_AUTH_LOGOUT } from '../action-types';

/**
 * Flushes local storage in order to log the user out.
 */
export function* userAuthLogout() {
    yield call(lockr.flush);
    yield call(browserHistory.push, '/login');
}

/**
 * Watches for user auth logout state chages.
 */
export function* watchUserAuthLogout() {
    yield* takeEvery(USER_AUTH_LOGOUT, userAuthLogout);
}
