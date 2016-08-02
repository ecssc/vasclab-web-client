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
    let path = ''

    if (action.organisations.length > 0) {
        path = action.organisations[0].id;
    }

    if (location.pathname === '/login' || location.pathname === '/') {
        yield browserHistory.push(`/${path}`);
    }
}