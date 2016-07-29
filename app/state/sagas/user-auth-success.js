import { takeEvery } from 'redux-saga';
import { browserHistory } from 'react-router';
import { USER_AUTH_SUCCESS } from '../action-types';
import { organisation } from '../../api/client';

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

    try {
        let organisations = yield organisation.index().then((response) => {
            return response.body.data;
        }).catch((error) => {
            throw error;
        });

        if (organisations.length > 0) {
            path = organisations[0].id;
        }
    } finally {
        if (location.pathname === '/login' || location.pathname === '/') {
            yield browserHistory.push(`/${path}`);
        }
    }
}
