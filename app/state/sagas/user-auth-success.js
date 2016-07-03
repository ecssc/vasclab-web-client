import { takeEvery } from 'redux-saga';
import { browserHistory } from 'react-router';
import { USER_AUTH_SUCCESS } from '../action-types';

/**
 * Watches for user auth success state change.
 */
export default function* () {
    yield* takeEvery(USER_AUTH_SUCCESS, userWasAuthenticated);
}

/**
 * Called when a user was succesfully authenticated.
 *
 * @param {*} action
 */
const userWasAuthenticated = function* (action) {
    yield browserHistory.push('/');
}
