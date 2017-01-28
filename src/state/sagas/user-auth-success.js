import { call, takeEvery } from 'redux-saga/effects';
import { browserHistory } from 'react-router';
import { USER_AUTH_SUCCESS } from '../action-types';

/**
 * Called when a user was successfully authenticated.
 *
 * @param {*} action
 */
export function* userAuthSuccess(action) {
    if (action.organisation === null) {
        return;
    }

    if (location.pathname === '/login' || location.pathname === '/') {
        yield call(browserHistory.push, `/${action.organisation.id}`);
    }
}

/**
 * Watches for user auth success state change.
 */
export function* watchUserAuthSuccess() {
    yield* takeEvery(USER_AUTH_SUCCESS, userAuthSuccess);
}
