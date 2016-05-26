import { takeEvery } from 'redux-saga'
import { USER_AUTH_ATTEMPT } from '../action-types'

/**
 * Watches for user login state change.
 */
export default function* () {
    yield* takeEvery(USER_AUTH_ATTEMPT, validateCredentials)
}

/**
 * Attempts to fetch the user from the api.
 *
 * @param {*} action
 */
const validateCredentials = function* (action) {
    //
}
