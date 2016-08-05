import { takeEvery } from 'redux-saga';
import { browserHistory } from 'react-router';

import { USER_AUTH_SUCCESS } from '../action-types';

/**
 * Called when a user was succesfully authenticated.
 *
 * @param {*} action
 */
const userWasAuthenticated = function* (action) {
    if (action.organisation === null) {
        return;
    }

    if (location.pathname === '/login' || location.pathname === '/') {
        yield browserHistory.push(`/${action.organisation.id}`);
    }
};

/**
 * Watches for user auth success state change.
 */
export default function* () {
    yield* takeEvery(USER_AUTH_SUCCESS, userWasAuthenticated);
}
