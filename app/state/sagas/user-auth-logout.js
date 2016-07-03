import { takeEvery } from 'redux-saga';
import { browserHistory } from 'react-router';
import { USER_AUTH_LOGOUT } from '../action-types';

/**
 * Watches for user auth success state change.
 */
export default function* () {
    yield* takeEvery(USER_AUTH_LOGOUT, userWasLoggedOut);
}

/**
 * Called when a user was succesfully authenticated.
 *
 * @param {*} action
 */
const userWasLoggedOut = function* (action) {
    yield browserHistory.push('/login');
}
