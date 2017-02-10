import { call, takeEvery } from 'redux-saga/effects';
import { browserHistory } from 'react-router';
import { USER_AUTH_SUCCESS } from '../action-types';

/**
 * Called when a user was successfully authenticated.
 *
 * @param {*} action
 */
export function* userAuthSuccess(action) {
    if (action.redirect === true && action.state.organisations.length !== 0) {
        yield call(browserHistory.push, `/${action.state.organisations[0].id}`);
    }
}

/**
 * Watches for user auth success action.
 */
export function* watchUserAuthSuccess() {
    yield takeEvery(USER_AUTH_SUCCESS, userAuthSuccess);
}
